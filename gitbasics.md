Cheatsheet
This is a reference list of the most commonly used Git commands. (You might consider bookmarking this handy page.) Try to familiarize yourself with the commands so that you can eventually remember them all:

Commands related to a remote repository:
git clone git@github.com:USER-NAME/REPOSITORY-NAME.git or git clone https://github.com/user-name/repository-name.git
git push origin master
Commands related to workflow:
git add .
git commit -m "A message describing what you have done to make this snapshot different"
Commands related to checking status or log history
git status
git log
The basic Git syntax is program | action | destination.

For example,

git add . is read as git | add | ., where the period represents everything in the current directory;
git commit -m "message" is read as git | commit -m | "message"; and
git status is read as git | status | (no destination).