#!/usr/bin/env bash
read -p "please input your message for git push : " message
git add --all
git commit -m "$message"
<<<<<<< HEAD
git push origin master
=======
git push origin master
>>>>>>> 902f6aaf1589beb3bb558e46f90da7bb1a607f47
