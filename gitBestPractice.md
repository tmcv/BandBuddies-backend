#### FEATURE BRANCHING

- small branches, isolated features
- the _initial_ commit can be on the _master branch_

  - `git init`
  - `git add .`
  - `git commit -m 'Initial commit'`
  - create repo on GitHub
  - `git remote add origin <url>`
  - `git remote -v` (not a step; to check)
  - `git push origin master` (**!!! ONCE**, it is allowed)

- create _development branch_

  - `git checkout -B development` (development is the name of the branch)
  - `git push origin development`
  - go to GitHub, to the repo, _Settings_, _Branches_, set `development` as default branch

- create a _feature branch_

  - `git checkout -B feat-add-image` (this is an example for the "add image" feature)
  - code your feature
  - stage & commit like usual
  - `git push origin feat-add-image` (or `ggpush`)

- on GitHub, I'm going to see the newly pushed branch
  - `Compare & pull request` button
  - write a description of what the feature does
  - `Create pull request` button
  - ((on `Pull requests` sector) `Add reviewers`)
  - `Merge pull request` button