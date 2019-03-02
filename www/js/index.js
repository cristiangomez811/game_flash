/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("iniciar").addEventListener("click", mostrarMenu);
        document.getElementById("backMenu").addEventListener("click", mostrarPrincipal);
        document.getElementById("menu1").addEventListener("click", mostrarTrivia1);
        document.getElementById("trivia_11").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_12").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_13").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_14").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_21").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_22").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_23").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_24").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_31").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_32").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_33").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_34").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_41").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_42").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_43").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_44").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_51").addEventListener("click", mostrarMenu);
        document.getElementById("trivia_52").addEventListener("click", mostrarMenu);
        document.getElementById("trivia_53").addEventListener("click", mostrarMenu);
        document.getElementById("trivia_54").addEventListener("click", mostrarMenu);
        document.getElementById("menu2").addEventListener("click", mostrarResultado1);
        document.getElementById("resultado_11").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_12").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_13").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_14").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_21").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_22").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_23").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_24").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_31").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_32").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_33").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_34").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_41").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_42").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_43").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_44").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_51").addEventListener("click", mostrarMenu);
        document.getElementById("resultado_52").addEventListener("click", mostrarMenu);
        document.getElementById("resultado_53").addEventListener("click", mostrarMenu);
        document.getElementById("resultado_54").addEventListener("click", mostrarMenu);
        document.getElementById("menu3").addEventListener("click", mostrarRecuerda);
        document.getElementById("scoreIcon").addEventListener("click", mostrarPuntaje);
        document.getElementById("backPuntaje").addEventListener("click", mostrarMenu);
        document.getElementById("backRecuerda").addEventListener("click", mostrarMenu);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function ocultar(){

    document.getElementById("divPrincipal").className = "ocultar";
    document.getElementById("divMenu").className = "ocultar";
    document.getElementById("trivia1").className = "ocultar";
    document.getElementById("trivia2").className = "ocultar";
    document.getElementById("trivia3").className = "ocultar";
    document.getElementById("trivia4").className = "ocultar";
    document.getElementById("trivia5").className = "ocultar";
    document.getElementById("resultado1").className = "ocultar";
    document.getElementById("resultado2").className = "ocultar";
    document.getElementById("resultado3").className = "ocultar";
    document.getElementById("resultado4").className = "ocultar";
    document.getElementById("resultado5").className = "ocultar";
    document.getElementById("recuerda").className = "ocultar";
    document.getElementById("interfazPuntaje").className = "ocultar";
}

function mostrarMenu(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoMenu";
    document.getElementById("divMenu").className = "centroMenu animated fadeInDownBig";
}

function mostrarPrincipal(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoPrincipal";
    document.getElementById("divPrincipal").className = "centrado animated jello";
}

function mostrarTrivia1(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia1";
    document.getElementById("trivia1").className = "centroTrivia animated bounce";
}

function mostrarTrivia2(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia2";
    document.getElementById("trivia2").className = "centroTrivia animated bounce";
}

function mostrarTrivia3(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia3";
    document.getElementById("trivia3").className = "centroTrivia animated bounce";
}

function mostrarTrivia4(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia4";
    document.getElementById("trivia4").className = "centroTrivia animated bounce";
}

function mostrarTrivia5(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia5";
    document.getElementById("trivia5").className = "centroTrivia animated bounce";
}

function mostrarResultado1(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoResultado1";
    document.getElementById("resultado1").className = "centroTrivia animated heartBeat";
}

function mostrarResultado2(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoResultado2";
    document.getElementById("resultado2").className = "centroTrivia animated heartBeat";
}

function mostrarResultado3(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoResultado3";
    document.getElementById("resultado3").className = "centroTrivia animated heartBeat";
}

function mostrarResultado4(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoResultado4";
    document.getElementById("resultado4").className = "centroTrivia animated heartBeat";
}

function mostrarResultado5(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoResultado5";
    document.getElementById("resultado5").className = "centroTrivia animated heartBeat";
}

function mostrarRecuerda(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoRecuerda";
    document.getElementById("recuerda").className = "centroTrivia animated flash";
}

function mostrarPuntaje(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoMenu";
    document.getElementById("interfazPuntaje").className = "centroMenu animated fadeInDownBig";
}

app.initialize();