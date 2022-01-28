// THIS IS AN EXPLANATION MADE USING THE PROCESS I TOOK TO CREATE A REPOSITORY AND ADD A FILE WITH WE LATER USED TO GO THROUGH ALL stages
// AND WE FINALLY PUSHED OUR COE TO OUR REPOSITORY ON GITHUB


geral@DESKTOP-AKJPBR0 MINGW64 ~/Desktop/PROJECTS/CODING PROJECT
$ cd ~ // We used this to go to the rood directory

geral@DESKTOP-AKJPBR0 MINGW64 ~
$ mkdir CarpetaHenry // In root directory we created a folder named CarpetaHenry

geral@DESKTOP-AKJPBR0 MINGW64 ~
$ cd CarpetaHenry // We accessed CarpetaHenry using cd (Change directory)

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry
$ git clone [https://github.com/CodexMagna/Repositorio-Henry.git] // we used the command to clone our repo straight from git hub by using the URL provided in git github
Cloning into 'Repositorio-Henry.git]'...
fatal: protocol '[https' is not supported

// We got an error due to a mistake as I was using [] to enclose the URL

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry
$ git clone [git@github.com:CodexMagna/Repositorio-Henry.git]
Cloning into 'Repositorio-Henry.git]'...
fatal: no path specified; see 'git help pull' for valid url syntax

// We got an error due to a mistake as I was using [] to enclose the URL


geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry
$ git clone [https://github.com/CodexMagna/Repositorio-Henry.git]
Cloning into 'Repositorio-Henry.git]'...
fatal: protocol '[https' is not supported

// We got an error due to a mistake as I was using [] to enclose the URL


geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry
$ git clone [https://github.com/CodexMagna/Repositorio-Henry.git]
Cloning into 'Repositorio-Henry.git]'...
fatal: protocol '[https' is not supported

// We got an error due to a mistake as I was using [] to enclose the URL


geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry
$ git clone https://github.com/CodexMagna/Repositorio-Henry.git
Cloning into 'Repositorio-Henry'...
warning: You appear to have cloned an empty repository.

//Repo was cloned from Github

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry
$ cd Repositorio-Henry

//Accessed Repo

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ touch archivo-ejemplo.js

//Created a file in Repo canmed archivo-ejemplo.js

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git status // We use git status to check status of file inside the repo file is untracked
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        archivo-ejemplo.js

nothing added to commit but untracked files present (use "git add" to track)

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git add archivo-ejemplo.js

//We added the file using git add

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   archivo-ejemplo.js

// Now file its staged and needs to be committed for the changes to happen

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git commit -m 'First file, going through all stages'
Author identity unknown

*** Please tell me who you are. // e were unable to run the code as we had not been identified so we logged in

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'geral@DESKTOP-AKJPBR0.(none)')

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git config --global user.email "geraldolopez40@gmail.com"

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git config --global user.name "Codex"

// we were able to log in our data

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git commit -m 'First File, going through all stages'
[main (root-commit) 7181160] First File, going through all stages
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 archivo-ejemplo.js

// we committed our file and left a message using the flag -m

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 239 bytes | 239.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/CodexMagna/Repositorio-Henry.git
 * [new branch]      main -> main

 // We pushed our commited changes back to git hub

geral@DESKTOP-AKJPBR0 MINGW64 ~/CarpetaHenry/Repositorio-Henry (main)
$


//THIS FILE WILL BE ADDED THE SAME WAY
