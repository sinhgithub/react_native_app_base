import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import styles from './styles';
import { ToggleBottomContent } from 'components/';
import { Icon } from 'components/';
import { useSelector } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import { getImageFromHost } from 'configs/appConfigs';
import FileViewer from 'react-native-file-viewer';

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

  const onViewFile = file => {
    let dirs = RNFetchBlob.fs.dirs;
    const arr = file.split('.');
    const fileType = arr[arr.length - 1].toUpperCase();
    const fileArr = file.split('/');
    const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    let path = dirToSave + '/' + fileArr[fileArr?.length - 1];

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
