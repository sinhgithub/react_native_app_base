import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
import styles from './styles';
import { ToggleBottomContent } from 'components/';
import { Icon } from 'components/';
import { useSelector } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import { getImageFromHost } from 'configs/appConfigs';
import FileViewer from 'react-native-file-viewer';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';

const JobContact = props => {
  const [isShowContent, setIsShowContent] = useState(true);
  const { token } = useSelector(state => state.auth.memberInfo);
  const { cardJob } = props;

  const handleToggleContent = useCallback(key => {
    if (key === 'down') {
      setIsShowContent(true);
    } else {
      setIsShowContent(false);
    }
  }, []);

  const onViewFile = async file => {
    let dirs = RNFetchBlob.fs.dirs;
    const arr = file.split('.');
    const fileType = arr[arr.length - 1].toUpperCase();
    const fileArr = file.split('/');
    const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    let path = dirToSave + '/' + fileArr[fileArr?.length - 1];

    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Tuyển dụng 102 chưa có quyền truy cập!',
            message: 'Cho phép ứng dụng tải file về máy của bạn ?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          RNFetchBlob.config({
            fileCache: true,
            appendExt: fileType,
            path,
            addAndroidDownloads: {
              path: path,
              useDownloadManager: true, // <-- this is the only thing required
              // Optional, override notification setting (default to true)
              notification: true,
              // Optional, but recommended since android DownloadManager will fail when
              // the url does not contains a file extension, by default the mime type will be text/plain
              mime: 'text/plain',
              // title: item?.fileName,
              description: 'File downloaded by download manager.',
              mediaScannable: true
            }
          })
            .fetch('GET', getImageFromHost(file), {
              Authorization: `Bearer ${token}`
            })
            .then(async res => {
              let status = res.respInfo.status;

              if (status === 200) {
                const route = res?.data;
                if (route) {
                  FileViewer.open(route);
                }
              } else {
                // handle other status codes
              }
            })
            // Something went wrong:
            .catch((errorMessage, statusCode) => {
              // error handling
            });
        } else {
          console.log('Camera permission denied');
        }
      } else {
        RNFetchBlob.config({
          fileCache: true,
          appendExt: fileType,
          path
        })
          .fetch('GET', getImageFromHost(file), {
            Authorization: `Bearer ${token}`
          })
          .then(async res => {
            let status = res.respInfo.status;
            if (status === 200) {
              const route = res?.data;
              if (route) {
                FileViewer.open(route);
              }
            } else {
              // handle other status codes
            }
          })
          // Something went wrong:
          .catch((errorMessage, statusCode) => {
            // error handling
          });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.file}>
      <ToggleBottomContent
        icon={<Icon color={'gray'} name="filetext1" size={30} fontName="AntDesign" />}
        title="Tài liệu đính kèm"
        onToggle={handleToggleContent}
      />
      <TouchableOpacity style={styles.fileContent} onPress={() => onViewFile(cardJob.attachFile)}>
        {isShowContent && (
          <View style={styles.fileItem}>
            <Text style={styles.fileItemText} numberOfLines={1}>
              {cardJob.attachFileName || ''}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(JobContact);
