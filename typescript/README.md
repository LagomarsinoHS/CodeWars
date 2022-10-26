
### Para transpilar un archivo TS a JS
    
    tsc fileName    

* Esto creará un archivo en la misma ruta con extension .js
* Será la transformacion de lo que escribi en TS pero en JS

### Si ya tienes definido la configuración de TS
    
    En caso de que tengas configurado todo, solo debes escribir tsc y esto lo hará automaticamente con todos los archivos ts en la ruta que definiste

### Crear un archivo de configuración de TS

    tsc --init

| Key | Info | Extra |
| ------ | ------ | ------ |
||Tomar en cuenta donde esta puesto el archivo de configuración. En base a eso sabrá donde agarrar las rutas||
| RootDir | Si rootDir la dejo `./` significa que donde esta el config es donde deben estar los archivos ts |  Esto es para indicar donde estarán los archivos ts |
| outDir | Si outDir la dejo `./dist` creará una carpeta dist donde esta el config | Indica donde creará la carpeta Dist con su transpilación |
| sourceMap | Esto es para debuggear, si no lo utilizarás no sirve activarlo |
| noUnusedParameters | Es para que me marque todos aquellos parametros que no han sido utilizadas |
|noImplicitReturns| Esto marca en caso de que haya retornos implicitos, es decir, valores retornados no claros en las funciones |
| noUnusedLocals | Esto me marca en el caso de que haya alguna variable que no este usando|





## Activar el debugger

    Al crear el archivo de debugg en node, hay que agregar una linea extra en el objeto, esta debe ser:
    `"preLaunchTask": tsc: build - tsconfig.json`


