import {CGFappearance,CGFobject} from '../lib/CGF.js';
import {MyQuad} from "./MyQuad.js";

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTrackSegment extends CGFobject {
    constructor(scene,p_inicial,p_final) {
        super(scene);
        this.p_inicial = p_inicial;
        this.p_final = p_final;
        this.dist = this.C_dist(p_inicial,p_final);
        this.alpha = this.C_alpha(this.dist);
        this.myquad = new MyQuad(this.scene);
        this.tracks = new CGFappearance(scene);
        //this.tracks.setEmission(1,1,1,1);
        this.tracks.loadTexture('images/tracks.png');
        this.tracks.setTextureWrap('REPEAT', 'REPEAT')
    }
    C_dist(p_inicial,p_final){
        return Math.hypot((p_inicial.x - p_final.x), (p_inicial.z - p_final.z));
    }

    C_alpha(dist){
        return Math.atan((this.p_inicial.z - this.p_final.z)/(this.p_inicial.x - this.p_final.x));
    }

    display() {
        this.scene.pushMatrix();
        console.log(this.dist);
        console.log(this.alpha);
        this.tracks.apply();
        this.scene.translate(this.p_inicial.x,0,this.p_inicial.z);
        this.scene.rotate(-this.alpha,0,1,0);
        this.scene.scale(this.dist,1,4);
        this.scene.translate(0.5,0,0);
        this.scene.rotate(-Math.PI*0.5, 1,0,0);
        this.myquad.updateTexCoords([
              (this.dist/2), 1,
              0, 1,
              0, 0, 
              (this.dist/2), 0]);
        this.myquad.display();
        
        this.scene.popMatrix();
    }
}

