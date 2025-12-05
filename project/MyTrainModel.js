import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
import { MyUnitCubeQuad} from "./MyUnitCubeQuad.js"
import { MyCylinder } from './MyCylinder.js';
import { MyCircle } from './MyCircle.js';
import { MySphere } from './MySphere.js';
import { MyWheels } from './MyWheels.js';
import { MyCrane } from './MyCrane.js';
/*
Estar, na sua forma-base, orientado na direção de +ZZ, e centrado no eixo +YY
As rodas devem ser assentes no chão (plano XZ)
As rodas devem ser constituídas por um cilindro com um círculo como “tampa”, ter um diâmetro de 1.5 unidades, e espessura de 0.2 unidades
O paralelipípedo de base deve ter as dimensões de 2.5 x 1 x 7.5 unidades (LxAxC), e estar a 1 unidade do chão
O corpo cilíndrico deve ter um raio de 0.9 unidades, e comprimento de 3.5 unidades
A cabine deve ter 2.0 x 2.5 x 1.8  (LxAxC)
A chaminé deve ser um cilindro sem topo (dimensões à e scolha)
A frente arredondada do corpo cilíndrico deverá ser uma esfera escalada (achatada)
*/

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyTrainModel extends CGFobject{
    constructor(scene){
        super(scene);
        this.base = new MyUnitCubeQuad(this.scene);
        this.cabine = new MyUnitCubeQuad(this.scene);
        this.cylinder = new MyCylinder(this.scene,20);
        this.chamine = new MyCylinder(this.scene,20);
        this.esfera = new MySphere(this.scene,60,60);
        this.rodas = new MyWheels(this.scene, 0, 0);
        this.crane = new MyCrane(this.scene, (180*Math.PI)*(180*Math.PI/180), 90*Math.PI/180);
        this.circle = new MyCircle(this.scene, 20, 0.5);

        this.initMaterials(scene);
     
    }

    initMaterials(scene) {
        this.red = new CGFappearance(scene);
        this.red.setAmbient(0.0,0.0,0.0,1);
        this.red.setDiffuse(0.7,0,0,1.0);
        this.red.setSpecular(1,0,0,1.0,1.0);

        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(0.0,0.0,0.0,1);
        this.yellow.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.yellow.setSpecular(1,1,0,1.0);
        this.yellow.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0.0,0.0,0.0,1);
        this.blue.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blue.setSpecular(0,0.749,1,1.0);
        this.blue.setShininess(10.0);

        this.material = new CGFappearance(scene);
        this.material.loadTexture('images/thomas1.jpg');
        this.material.setTextureWrap('MIRRORED_REPEAT', 'MIRRORED_REPEAT');
    }
    display(){
        this.scene.pushMatrix();
        
        this.scene.pushMatrix()
        this.scene.scale(2.5,1,7.5);
        this.scene.translate(0.5,1.5,0.35);
        this.red.apply();
        this.base.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix()
        this.scene.scale(2.0,2.5,1.8);
        this.scene.translate(0.5,1.3,0.35);
        this.red.apply();
        this.cabine.display();
        this.scene.popMatrix();

        //alinhar cilindro com a base
        this.scene.pushMatrix()
        this.scene.scale(0.9,0.9,3.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(1.10,0.45,-3.2);
        this.red.apply();
        this.cylinder.display();
        this.scene.popMatrix();
        //circulo apenas para poder por a cara do thomas :)
        /*this.scene.pushMatrix()
        this.scene.scale(2,2,3.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0.55,1.48,-1.5);
        this.red.apply();
        this.material.apply();
        this.circle.display();
        this.scene.popMatrix();*/

        //colocar no sitio certo
        this.scene.pushMatrix()
        this.scene.scale(0.3,0.9,0.3);
        this.scene.translate(3.2,4.20,15.0);
        this.red.apply();
        this.chamine.display();
        this.scene.popMatrix();

        //esfera 
         this.scene.pushMatrix();
         this.scene.translate(1.0,2.9,5.50);
         this.scene.scale(0.9,0.9,0.3);
         this.scene.scale(1,1,0.3);
         this.scene.translate(0,0,-5);
         this.red.apply();
         this.material.apply();
         this.esfera.display();
         this.scene.popMatrix();


        //rodas 1 frente 
        this.scene.pushMatrix();
        this.blue.apply();
        this.rodas.display();
        this.scene.popMatrix();

         //rodas 2 frente 
        this.scene.pushMatrix();
        this.scene.translate(0,0,5.0);
        this.blue.apply();
        this.rodas.display();
        this.scene.popMatrix();

         //rodas 1 tras
        this.scene.pushMatrix();
        this.scene.translate(2.5,0,0)
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.blue.apply();
        this.rodas.display();
        this.scene.popMatrix();

         //rodas 2 tras
         this.scene.pushMatrix();
         this.scene.translate(2.5,0,5.0)
         this.scene.rotate(Math.PI, 0, 1, 0);
         this.blue.apply();
         this.rodas.display();
         this.scene.popMatrix();

         this.scene.popMatrix();
         //Guindaste
         this.scene.pushMatrix();
         this.scene.translate(1,4.5,0.5);
         this.yellow.apply();
         this.crane.display();
         this.scene.popMatrix();



    

       
    }
}

