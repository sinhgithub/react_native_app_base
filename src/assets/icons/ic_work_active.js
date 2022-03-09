import * as React from 'react';
import Svg, { Image } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={310}
      height={310}
      viewBox="0 0 310 310"
      {...props}>
      <Image
        x={8}
        y={36}
        width={293}
        height={267}
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAAELCAMAAACoH2ADAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEXtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHybtHyYAAABWOW2ZAAAA/nRSTlMAHG2u2vn+5r+EOwEbbKvZ+OS+gDcfcNzlOD223WgGtddhBEC7ZgUWqRSl1DkardY8/X02/HM/6nlN9ppEjk76lIw1foVXEuJJUajuoucOEZWHj/cX8730E/sha8Vkt8ALA7Ix0SPfLE/vQkpfUApeGGB7KKCSdMe4D2XP7VQZ6ZvhDLOki/WJ8q9aArnBaUaqyJNYxJFdWfHgTEiKMAjNyZAVhtvTai2hfBDsB4Mgo43QU8awb7QkCet/S7oNMyV4IiusYirjKbGIntJFL3rD6GNW1ZnOPh2Wd9inR3IegVxbOstVQXVumGcuMjSCvPB2n0OcwnEmyswnl96mnfPmTd4AAAABYktHRP+lB/LFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5gIYFSAsXhVX9QAAEs9JREFUeNrtnXl8DlcXxx9bSJ4gxL5E7Vs0DcErKqF2Ea01tSSE1lqxU3sJRYJS+07sia2tNpZS+1JKi3ppFUVracnbRbXVzueNkEhmzr333Ln3eWbyZH5/nznn3O8zz8zc7VybLU3ZsufImUthyS13HncPu41fnnnz5fdiuk8LU6CgdyEdUWyFi+QoimhFsYLuxXV4L1HSDd0EpVRpH073xctwuE/VC2XLcYYpX4EjTP6Klfi8V67C2YD85XncV63GjyhF1X15wtR4kdO9Xwke9y/l5s7fvyb+b1ergE5IihJQG9+KOnX5W/EfvPt6gXoaUB+L6WVd7lPVANuKoGA97htiW+GhsxWNcO5fEYKkKI2Rd5IuSIrSBOe+Mv/f7ZmaYtw3ay4GSVFaYMLU4P+7PVNLFKVWutMPqYpw31oUkhLaBhEmh273dV9FuPcVyP81tvtXhCEpSlt2mPIC7tshKJUR8N++gwN/4+fqyL6ZOgm4D3ud6d5Tx9feczHf0x06S6CkVGSF6SLkviuTUl4h/91Y7sNlQFIiWGFqC7nvzqSUT8h/QA+Ge70f3RkVFskI01PIvRezv/WCWP69GO7fkEJJeZMRpreY+z4sSu3F/PdluO8nh1J/Rhihh6uiDGBREkz/Lcemn6qB9Cg9BN0zP48F/TNeD1FyICmD6GEGC7of4mBKQ+nea0iilJ0eZpjJKQ2ne68jidIIepggk1OqTvc+UhKlUfQw3ianpNSgen9bEqWA0dQwo8xOidpHqSylf/JEY2hhxPonzqBUlDaAL/pPeK6xtCHFRqanRIvQbJw0Ssp4cpgJYeanNJE87vCOPEjKpMnEMLzzP0ZQUqJJf4aWEiEpyhRSC4aI+3YCJWUq7LnWu1IpkWYJ6uAnjA2lpEyD7iYPSR1dBqaXp0vw7BRKygztAHtpwcEGSFM0zyZ7EZ3zS0ZQUkJjYjN4HTZTPqNkTRqf8a7tM0uOXydRUhS/2c1SXUa+N0fSgIlWY8PTvsLLDRAboTSCkqL4z30/+6B54e49QxyFKEUB8xd0XbhoTNsyi+X5dCKlTCyLEkYWJYwsShhZlDCyKGFkUcLIooSRRQkjixJGFiWMLEoYWZQwsihhZFHCyKKEkUUJI4sSRhYljCxKGFmUMLIoYWRRwsiihJFFCSOLEkYWJYwsShhZlDCyKGFkUcLIooSRsZQCQ3PzLNR167ckxD9rUSrQYGnKTp4Oy5YvQZj7z8y7YmWyuU+f0j2l7V4xO6VVA9MtR7W3WM0w91rjmS6nuLUdswKlsNIZl+za7G9RV38XVO/x9pS2sNS8lNYN08bpsp5s764tF2Af6cwHlBGU1sdBgUYT/3UbwMRinIjJAErNJ8CRquaH7UlVqGa7MqXOxIJ3G8F9NSWJ+wM3uTClqeRYmwHzjp5E8/iJLkspgbzbz7almNaeVvWttMtS2koLpt04HxZPMfdx1s3kdErbaMG0e8K3U5Pb4aKUPqBH6662/5BqXsJFKa2hR9uqtqeXZPNh1w3OlJTC6dGaqswnMrJbrysJ01NaRo/moTJfxcguwjUpMUo1r1CZs+rWzXBNSozSZOoanx8xstvpmpQYtcNaqMxzMrITLYZjUko16dE+Vpl3ZlRrT3BNSp/Qo2kqG9OL/yc6B5LTKXXcRQtWbrfafg81uQ0uSon+YNqrMV9HLdX+katSmksL9qnWfinFvLiTIBkwvkSphgpVHBxLKZErUo7a5JSW7COFWukH2RchphbjLEhGjHtXIT1q6oPmufYTzD+TWKLDfJRIA3EHCOahB0HzykWdBsmY+bip0N3UmGhe4BBgvi2n8yAZNLcboZmRiz9MMe8Yo0lrr5O+uo2kpIRsyFB+vdwRxgh2maMZkkoULxuYGSgpyjHv46khPhvKLuXuFj0+dfJl5dI5Ac6FZOj6pWLR73t7LzgxCWneefWmk95tP/9IQs3AzEQp88iihJFFCSOLEkYWJYwsShhlPUrTT51ouKfrvNPFV3yxbdu2Pit8ywdVPDOi1dkvLUopGpdnwVeFmhFbuq/XuT09Q7MyJbfzFwaxznJ6Ks+gtXM1KzazAqW6rWMwR0c+1+igBRnXeLo8pVInX4nFkFHraM2vswql3Dtq6SH0TAeHpg70uTAl/+i+vMeEq2W/OPxdl6aUsPW/goieal+R3i5Lad2GXRgEKEWO7yaTUmD3S95FvF8riD2kpejhtQcuN6nyjXRGfk11PbDJ2iKLUsC3V1IHaX1OT2GfiVDqcuHUEJ7fCR6eqYK/SDIjhJCpteqS4aqrjLNPJx7J8GCNjTkmi9HEMaKPbIdRCgnSXHeFdjr5Yc1a931TpDAKnoo5E9wYSkWhecWr5OfNNSiQjAP3IhINYYSi1Bs+SS+ONPlKWA/3MSIUVbuvG8QIQynsOOHSRHgin3jU5RoxSNvjbIaJnd0R4rXfQ+brepDMfU4JMBpH34thNKVulNVqBQF7yrr4G/ohdSJvozMFJdo6d2Cx2nxaML2Hgfpfdv4nEhcl+ialmxr7WzTz9/RBqvuDsYzYlH6kXn1bbT6d+rEfGcoKB2m1nH6tIymtoF6tOVo6mh5Nz7dla2YvS/1bXL14vfbaO9t37qwQvXPO8B1n7gbdm8zpg49SoJ1+ufpjYDPd/LbCrWuMDDKoQ9+a+fKDZVISui8I/ymSwxUPpVOMy9UPpnN082W8jILfQrdk8JDh6xjewirs8dVFiuGXtTVL/dZiPGd/5oQUeBrZjI33v0a6HPftvB6yKc1kXK7emsW5P46hxXVQbTh4n28MK6wV71gww2E3xuXq7cot6OYvcbUmpBCiAT7nHug4HzK3exeEbyylY4zLS6nsK9LNF/G0JGkjO/34/xXjcZlOboeLs90jKSn0I++j1NOkI+jR3DmasZh9J1U9KXQE+Pz+zAhISkHUqzXvLEY9gfn4JgQymxDvLnxMeveLcij9Qr36jsaeOk42GF9TKWAAI/Fys6UsCc+Bej6xvHSkFSKZrK1j5k4Ldhmf/V1G3uVllRrwWhslTkkZSrn4R615EoXqLnw3bho96/j6aE9sFf1VnNL0GsRrK0Ml8Sg1PO6jE59D75bU09VrJus3VjeP7SKClLEd3O3vX4IUaj+6asmpHrSUd12SyyhZpRhfBQgX3oRLCVu5chMGOiqz91k8Uz/qK+CQH9YPhwLOUO9ejIu84JWzSeZ+4H80biw6ZdpeXtst4dc/rJ20mT6Uh7bajnQs5SHTG/hoHpYfFemJ1lLSjVzuGEbJyjmMHBbn4Xe1h0TqzuP2D1W9ydjZ+DvgJqVeRVQOh0FK/qOTPzGRHnJdSv/1VXgNa+OR37x0bY1s+QE+17A/yJDiWPV408ntwcNfV9RadGk3/pLg7wUpJUfNM7L4k05dm1rfdcJ0wndfGn8w+Y8au23g+1zvbUqdq2z4f60SnTrXuiV7Ev6q2aKUUhSYFMhj7paUxFvnlTKglYjf7+yfPd11Xarjwx+QQcnhCiPXKOxSAO+mbMY/Ksf6qQOZgdJD8t+NY+f8BdW1hziq8OU1P6VHxLH7qufxXrR9SZ7vhyOmp0TsKKzkGJkCSvlyDNkona+YnFI1EiR7Kx43AOvuHJcvvmdqSu8SF5bgRxMUuIzaVB4Hk+LMTInUrbYt5XIDzWgU4fLQKdK8lIhFrxP7cflZArgYwpfKNPNSOkCAVOlPPj8SKKnnFY1G81xfkm6lk5yOZFAKjTMppe8IkOrwTt3KoKRaYmQ0mzQlEW6lXdzVqqRQUr43JaXlhFtpGrcnOZR2VzUhpWDCt1Iv/ipDcigpm0xIiXQAwe/8riRRUnz1UMrfqOVf8ZHxf/RthJrEyHUib4kOUbsq35j9ImZMygOGdEtH62RRemTnpjQjfeeoVhXWeyf0Ybp++b4NzVnu/WBIPpij5xxFSVnISen8DVXUQm/QzP2X98hovvIa4+Q8wriSrh0+0igVTZvjQJlv0u6SXfkO2Xw3MPHuS12NlQsum8CxsMARlJTSPJTagk3YQzIvAM6CbKN99xCWifP1UeVTap66CRdh2xBugq0BbB5yFDY/SKlaEwNe4cMx0u0QSkrqOmq25XzSetbIPKB9PYK57VfigGF7+Lv7ur6mSaR0yo6k5EWuRVMYesV/TjS3jSDFeBG2p74hnEJJeQ9Jibbe6prWPKwy2bwNaf7wOmiudzudTEo7cZS8aEV7XtWeOUxdpEsYmHWDYww3AaWACShKrWitBg5VPEQzLwx/jP4J33k8xz47ipJyBkVpPJVSPbV5fqq57REY4z5o+5Xehkml9A2KEn3j9Wj1zfE3nRI8DAL34fRuX5VLSdmIoBRKb7VN3c/qSjdfCMXw8oFM43SfBi6XUlsEJdZxU+qBjb10c/BwwbOgabjudsmltA5B6VMGJfV53Xp2fp0ETfWvepNLSXmTTSkPg1IEH6X9UAzwY73SdLNQysumNJZBaa7K/hbdHNwqPxiyrKPolmRKn7ApdWRQClHZX6abQ8dT1QUtGyu6JZnS4lj2l8Awaqu7qM0P0yn9AkToBFrONA0l5R6b0m1qq++qzROoG2LtUEmvdpBlpP7HknRKs9mURlEpaZcFUT8FwA8BsCbPIYFWyaa0CTEmQKsuCrzY36ZRAo85AV+LXBt8HUxpLIJSSUqroYNePcjmX4CdXXBVblsTUcpVDjFW2ZLY6r2Q+QfEDRKR3SD7zuCC02gTUVKOIiglZCO0ugZcZnAHiZI3aP4YtBUpBSqdUhBmduAUvFt+NKlmxhgY0jzYGuzF2UUO2JFO6TZqpulPaPik6lySuT+4m2MQoV4qOOZdQ6RR0im1w81a9tYWQNhfimLfUFMyqRJxXXp9iJLQuZ/SKR1GzoAHtMu4HD9+Kn305xvVusQfyPvawSnRAVTvBbp1p6mVbEqz0Kspwhp8kRby0FT2Zqq5g9Lm2HYtmkUxHAlRWki2bz5STwE0IUrnedYvHfun8Zgh4TWrIdeBBM9f8PGQIbfbdac/icHyCrWJ5sv1FfYWovSl8au8wArk3gRj/xhePDIoJRlPCSxpRqLUlZeOFEpuxlMaCDWKUHKXVVnMQZSUzEWpl0WJTemmbkiZntIiqFFNQFN3XjauQ4njHbeIl40kSh2Np1QWahRcaGYZL5vnqiiSYoLxlMDVuWNA0/G8bJ7rR86sMiin8ZTAh01L0PQyL5vnuiCS4ijjKV2CGgVOI9DH1OliVdil6hPjKYHLyBJB0841eOGkylcoxQvGU3oAtaoSvJz3Ei+dVOleC5WiA8ZTygk2C9644l+ek84zlRVLcZ7xlLzAdhFGpBIQpXW16s9R5gRSLeMpwUtOGhKMk/pyM7KXZp9QRpXbZBNQAmub3CWan/DlYhR75axogqXMsNdyENQ42ktpUpXl3kjtyFEXnQdRM8xACdzWHMW/XddhGmoGSmXAf8ojccey9IMZKE0CKbUzOq00BUSZgZLyKkTpQ6OzStNqmykogSc6xPMWJ3SYnuz/0LslRnIaWvGUOHOonnx5yCq5LiB4ZmSz0Wk907gn66v+MTqL5O9pcJ3XMHHHUpRy8ILu/VUSBS/dNMFd/kQpw8j6tw7JE3yoak2j00pRyNMFkFw1Dh2j30FKieKOJejO02RW6DjlSLKC94GYOol7Ftf+Z8ncEXclqqYgpRij01LS7VbaJzRyLkXwFuotHAXMHaW0Sie2Qxxlwh2jMPjoSm9xz4JKSLemrBBf1UwHCK76Edfe6Ly2pk/nqMgidBkiVC342+C02mcstDG5gbGjXl7w6U5XBUesRaXZlJb4r4NOY8GJcIbha4ZCCgMqi0z+cESex7uTjFEETGmCoU8m2vE1phJXYW/JmthGPH/nKEpfOS8pGiOevrNk3Af417FGt51DFQyCFPCz0S3nUReu03zkaYfRDeeTvnKMoiqKOBPUTIo1YgQlgONgZ3PIc5zzKe0xutH86ut0SLMixbN2ukSqC+hRscFGt1iPIh84FVLwDfGUjdDrHKcQiusro5urV4lOHN1tYnRj9cvDaR+X2+3i2RqmZU4akevpI56rgRrolLU6BTM3JJutqRPupoKZrGMCKEikRgxKmfzv9lT9FzsWUjVXgGSz3TsmjoKstZn57ZZenmMdxig4XDw9s2hXawdBCvUQT85Eyu6QV93ZwUa3S7J+kt+p879WTjwvk6lHfcmQHmfSQQCGXn4s80ZqN1k8I1MqqpG05R9v1BJPx7Q6HiGF0e67mXHwlkN7xb+d2k+LF8/D5LKfQ50dSWa0ZoLRTXCKYlt2080oZG3WYJSi4tt1jRSs7+qqLzaCmt1exYlo8b+FxMNmPv1VE3/WXNL2elvEI2ZSZQvPwZ4p91/V9qLr9UX4ZD8+5rebxLmWJT33nM5izyKyIv9amndHvjzVQ5NStiEFhqxbXfK3zTG+Iosk/w+DOOI1z1DKfQAAAABJRU5ErkJggg=="
      />
    </Svg>
  );
}

export default SvgComponent;
