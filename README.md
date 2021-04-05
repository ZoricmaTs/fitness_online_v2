# fitness_online

## vue setup
```
npm install -g @vue/cli
```
If you see an EACCES error when you try to install a package globally, you can either:
Manually change npm's default directory
To minimize the chance of permissions errors, you can configure npm to use a different directory. In this example, you will create and use hidden directory in your home directory.
Back up your computer.
On the command line, in your home directory, create a directory for global installations:
```
mkdir ~/.npm-global
```
Configure npm to use the new directory path:
```
npm config set prefix '~/.npm-global'
```
In your preferred text editor, open or create a ~/.profile file and add this line:
```
export PATH=~/.npm-global/bin:$PATH
```
On the command line, update your system variables:
```
source ~/.profile
```

To test your new configuration, install a package globally without using sudo:
```
npm install -g @vue/cli
```


## vue setup

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
Error ENOSPC System limit for number of file watchers reached
It turns out that the maximum number of files the system can monitor had been reached. 
```
cat /proc/sys/fs/inotify/max_user_watches

// response
8192
```
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf

// response
fs.inotify.max_user_watches=524288
```
Have the Linux kernel read & use the new limit.
```
sudo sysctl -p
// response
fs.inotify.max_user_watches = 524288
```

Check the number of watchers again just to be sure.
```
cat /proc/sys/fs/inotify/max_user_watches
// response
524288
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
