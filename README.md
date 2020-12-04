1. Create a non-application project
```shell script
ng new ng-base-library --createApplication false --prefix base-lib
```
2. Add libraty
```shell script
ng g library base-lib --prefix base-lib
```


---
3. Use ng-samurai Angular Schematics to create sub-entry, refs: https://kevinkreuzer.medium.com/ng-samurai-schematics-to-improve-tree-shaking-of-angular-libraries-83656ca22d9e
```shell script
ng g ng-samurai:generate-subentry feature-b --gm false --gc false
```
The --gm and --gc flags stand for generate module and generate component respectively so depending on our feature we might want to generate default module and component but we might also skip them for service only sub-entries…

---

4. Dependency graph with madge
```shell script
npm i -g madge
madge projects/base-lib/src/public-api.ts --ts-config tsconfig.json --image graph.png
```
!! Must install Graphviz

---
5. Integrate 3rd dependencies
Always declare them in `peerDependencies`


---
## TODO
- [ ] integrate Cypress + Polly Js
- [ ] integrate husky + commit lint
