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
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');

    },
    showValues: function () {
       var name = document.getElementById("userName").value;
       document.getElementById("name").innerHTML = "Name:"  + "  " +  name;

       var dob = document.getElementById("dob").value;
       document.getElementById("date_of_birth").innerHTML = "D.O.B:" + " " + dob;

       var residence = document.getElementById("residence_of").value;
       document.getElementById("residence").innerHTML = "Residence:" + " " + residence

       var student_non = document.getElementById("student_Non").value;
       document.getElementById("student_non").innerHTML ="Student/Non:" + " " + student_non

       var game = document.getElementById("game").value;
       document.getElementById("Game").innerHTML = "Game:" + " " + game

       var contact = document.getElementById("number").value;
       document.getElementById("contact").innerHTML = "Mob/Ph:" + " " + contact

        var timing = document.getElementById("timing").value;
       document.getElementById("timing").innerHTML = "Timing" + " " + timing

       var image = document.getElementById("userImage").src;

       var showImage = document.createElement("IMG");
        showImage.className = 'user_uplodad_img'
        showImage.setAttribute("src", image);
        document.body.appendChild(showImage);
      
       return false;
    },

};

app.initialize();
