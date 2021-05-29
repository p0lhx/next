class Celular{
	constructor(color, peso, rdp, rdc, memoria){
		this.color =color;
		this.peso=peso;
		this.resolucionPantalla = rdp;
		this.resolucionCamara = rdc;
		this.memoria = memoria;
		this.encendido=false;
	}
	prender(){
		if(this.encendido){
			alert("celular apagado");
			this.encendido =true;
		}else{
			alert("celular encendido");
			this.encendido=false;
		}
	}
	reiniciar(){
		if(this.encendido){
			alert("reiniciando celular");
		}else{
			alert("el celular está apagado");
		}
	}
	tomarFoto(){
		alert(`foto tomada en una resolucion de: ${this.resolucionCamara}`);
	}
	grabarVideo(){
		alert(`grabando video en una resolcion de: ${this.resolucionCamara}`)
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		Resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
		Resolucion de Camára: <b>${this.resolucionCamara}</b><br>
		Resolucion de Video: <b>${this.resolucionVideo}</b><br>
		Memoria Ram: <b>${this.memoria}</b><br>`;
	}
}

celular1 = new Celular("rojo","150g","5'","full HD", "2GB");
celular2 = new Celular("negro","148g","5.3'","full HD", "5GB");
celular3 = new Celular("blanco","130g","5.2'","full HD", "4GB");

document.write(`
	${celular1.mobileInfo()}<br>
	${celular2.mobileInfo()}<br>
	${celular3.mobileInfo()}<br>
	`);

celular1.prender();
celular1.prender();
// celular1.prender();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.prender();