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
        document.getElementById("mySidenav").style.width="100%";
        var name = document.getElementById("userName").value;
        document.getElementById("name").innerHTML = "Name:"  + "  " +  name;

        var dob = document.getElementById("dob").value;
        document.getElementById("date_of_birth").innerHTML = "D.O.B:" + " " + dob;

        var dob = document.getElementById("address").value;
        document.getElementById("residence").innerHTML = "Residence:" + " " + dob;

        var student_non = document.getElementById("student_Non").value;
        document.getElementById("student_non").innerHTML ="Student/Non:" + " " + student_non

        var game = document.getElementById("game").value;
        document.getElementById("Game").innerHTML = "Game:" + " " + game

        var contact = document.getElementById("number").value;
        document.getElementById("contact").innerHTML = "Mob/Ph:" + " " + contact

        var time= document.getElementById("time").value;
        document.getElementById("timing").innerHTML = "Timing" + " " + time

        var image = document.getElementById("userImage").src;
        var profile = document.getElementById("profile_image");

        var showImage = document.createElement("IMG");
        showImage.className = 'user_uplodad_img'
        showImage.setAttribute("src", image);
        var x = profile.appendChild(showImage)
        
       
        //creating canvas of file
        html2canvas(document.body .sidenav, {
            onrendered: function(canvas) {
                var can = document.getElementById("canvas");

                document.body.appendChild(canvas);
            
            }
             
        });
      


        return false;
    },

    fileSystem: function () {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

            console.log('file system open: ' + fs.name);
            createFile(fs.root, 'newTempFile.txt', false)
            fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

                console.log("fileEntry is file?" + fileEntry.isFile.toString());
                // fileEntry.name == 'someFile.txt'
                // fileEntry.fullPath == '/someFile.txt'
                writeFile(fileEntry, null);

            }, onErrorCreateFile);

        }, onErrorLoadFs);
    }
};

app.initialize();
