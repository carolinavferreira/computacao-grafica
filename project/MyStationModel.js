import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
import { MyUnitCubeQuad} from "./MyUnitCubeQuad.js"
import { MyPyramid } from './MyPyramid.js';
import { MyCylinder } from './MyCylinder.js';
import { MyMadeira } from './MyMadeira.js';

/**
 * MyStationModel
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyStationModel extends CGFobject{
    constructor(scene){
        super(scene);
        this.base = new MyUnitCubeQuad(this.scene);
        this.casa = new MyUnitCubeQuad(this.scene);
        this.janela = new MyQuad(this.scene);
        this.porta = new MyQuad(this.scene);
        this.coberto = new MyQuad(this.scene);
        this.telhado = new MyUnitCubeQuad(this.scene);
        this.pilar = new MyCylinder(this.scene, 80, 80);
        this.madeira = new MyMadeira(this.scene);

        this.initMaterials(scene);
     
    }

    initMaterials(scene) {
        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0.0,0.0,0.0,1);
        this.blue.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blue.setSpecular(0,0.749,1,1.0);
        this.blue.setShininess(10.0);

        this.grey = new CGFappearance(scene);
        this.grey.setAmbient(0.0,0.0,0.0,1);
        this.grey.setDiffuse(0.2,0.2,0.2,0.2);
        this.grey.setSpecular(1,0.7,0.8,1.0);

        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0.0,0.0,0.0,1);
        this.orange.setDiffuse(0.60,0.40,0,1.0);
        this.orange.setSpecular(1.0,0.65,0,1.0);

        this.material = new CGFappearance(scene);
        this.material.loadTexture('images/floor.png');
        this.material.setTextureWrap('REPEAT', 'REPEAT');

        this.white = new CGFappearance(scene);
        this.white.setAmbient(0.0,0.0,0.0,1);
        this.white.setDiffuse(1,1,1,1);
        this.white.setSpecular(1,0.7,0.8,1.0);
    }

    display(){
        //base
        this.scene.pushMatrix()
        this.scene.scale(15,1,30);
        this.scene.translate(0,0,0);
        this.grey.apply();
        this.base.display();
        this.scene.popMatrix();
        //Casa1 pequena
        this.scene.pushMatrix()
        this.scene.scale(3,5,5);
        this.scene.translate(0,0.5,1.5);
        this.white.apply();
        this.casa.display();
        this.scene.popMatrix();
        //casa2 grande
        this.scene.pushMatrix()
        this.scene.scale(3,7,10);
        this.scene.translate(0,0.5,0);
        this.white.apply();
        this.casa.display();
        this.scene.popMatrix();
        //casa3 pequena
        this.scene.pushMatrix()
        this.scene.scale(3,5,5);
        this.scene.translate(0,0.5,-1.5);
        this.white.apply();
        this.casa.display();
        this.scene.popMatrix();
        //janela1
        this.scene.pushMatrix();
        this.scene.translate(1.6,6,-3);
        this.scene.scale(3,1,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.blue.apply();
        this.janela.display();
        this.scene.popMatrix();
        //janela2
        this.scene.pushMatrix()
        this.scene.translate(1.6,6,0);
        this.scene.scale(3,1,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.blue.apply();
        this.janela.display();
        this.scene.popMatrix();
        //janela3
        this.scene.pushMatrix()
        this.scene.translate(1.6,6,3);
        this.scene.scale(3,1,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.blue.apply();
        this.janela.display();
        this.scene.popMatrix();
        //porta1
        this.scene.pushMatrix()
        this.scene.translate(1.6,2,3);
        this.scene.scale(3,3,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.material.apply();
        this.janela.display();
        this.scene.popMatrix();
        //porta2
        this.scene.pushMatrix()
        this.scene.translate(1.6,2,0);
        this.scene.scale(3,3,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.material.apply();
        this.janela.display();
        this.scene.popMatrix();
        //porta3
        this.scene.pushMatrix();
        this.scene.translate(1.6,2,-3);
        this.scene.scale(3,3,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.material.apply();
        this.janela.display();
        this.scene.popMatrix();
        //porta4
        this.scene.pushMatrix();
        this.scene.translate(1.6,2,-7.5);
        this.scene.scale(3,3,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.material.apply();
        this.janela.display();
        this.scene.popMatrix();
        //porta5
        this.scene.pushMatrix();
        this.scene.translate(1.6,2,7.4);
        this.scene.scale(3,3,2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.material.apply();
        this.janela.display();
        this.scene.popMatrix();
        //coberto
        this.scene.pushMatrix();
        this.scene.scale(3,5,10);
        this.scene.translate(0.5,1,0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.scene.rotate(-80*Math.PI/180, 1, 0, 0);
        this.orange.apply();
        this.coberto.display();
        this.scene.popMatrix();
        //pilar1
        this.scene.pushMatrix()
        this.scene.translate(2.8,0,-4);
        this.scene.scale(0.1,4.61,0.1);
        this.orange.apply();
        this.pilar.display();
        this.scene.popMatrix();
        //pilar2
        this.scene.pushMatrix()
        this.scene.translate(2.8,0,-1);
        this.scene.scale(0.1,4.61,0.1);
        this.orange.apply();
        this.pilar.display();
        this.scene.popMatrix();
        //pilar3
        this.scene.pushMatrix()
        this.scene.translate(2.8,0,2);
        this.scene.scale(0.1,4.61,0.1);
        this.orange.apply();
        this.pilar.display();
        this.scene.popMatrix();
        //pilar4
        this.scene.pushMatrix()
        this.scene.translate(2.8,0,4.5);
        this.scene.scale(0.1,4.61,0.1);
        this.orange.apply();
        this.pilar.display();
        this.scene.popMatrix();
        //telhado1 casa pequena
        this.scene.pushMatrix()
        this.scene.translate(0,5,7.5);
        this.scene.scale(2,2.9,4.99);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.scene.rotate(-45*Math.PI/180, 1, 0, 0);
        this.orange.apply();
        this.telhado.display();
        this.scene.popMatrix();
        //telhado2 grande
        this.scene.pushMatrix()
        this.scene.translate(0,6.8,0);
        this.scene.scale(2.121,2.9,9.99);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.scene.rotate(-45*Math.PI/180, 1, 0, 0);
        this.orange.apply();
        this.telhado.display();
        this.scene.popMatrix();
        //telhado3 casa pequena
        this.scene.pushMatrix();
        this.scene.translate(0,5,-7.5);
        this.scene.scale(2,2.9,4.99);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.scene.rotate(-45*Math.PI/180, 1, 0, 0);
        this.orange.apply();
        this.telhado.display();
        this.scene.popMatrix();
        //madeira
        this.scene.pushMatrix();
        this.scene.translate(6,1,-2);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.madeira.display();
        this.popMatrix();
    }
}

