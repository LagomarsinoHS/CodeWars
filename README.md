# Información sobre el uso de npm
Para instalar un paquete de npm

    npm i nombrePaquete
        Ej: npm install express

Si quiero una version exacta

     npm i nombrePaquete@version 
        Ej:npm i express@2.10.2

Si quiero que se mantenga una version de major y minor, pero los patch siempre se actualicen agrego ~ a la dependencia

    ej:
    dependencies:{
    "express":~2.10.4
    }

Para usar la ultima Minor update de una dependencie se usa ^

    ej:
    dependencies:{
    "moment":^2.10.4
    }