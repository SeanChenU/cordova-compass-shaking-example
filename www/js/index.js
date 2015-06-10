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

var currentHeading = 0;
var imageBaseHeading = 0;

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
        // Shaking 集氣條
        var boxLength = 0;

        var canv = document.getElementById("myCanvas");
        var context = canv.getContext("2d");
        context.fillRect(0, 100, boxLength, 100);

        // Shaking detection
        shake.startWatch(function() {
            console.log('Shaking is happening');
            // alert('Shaking is happening');

            boxLength = boxLength + 20
            context.fillRect(0, 100, boxLength, 100)

            // Move image
            // var qq = 60 + boxLength;
            // var left = qq + "px";
            // $("#exit").css("left", left);

        }, 30, function() {
            console.log('Shake watching error');
            alert('Shaking error');
        });

        // Compass watching
        var watchID = navigator.compass.watchHeading(function(heading) {
            var element = document.getElementById('heading');
            currentHeading = heading.magneticHeading.toFixed();
            element.innerHTML = 'Heading: ' + currentHeading;

            // Move image
            var delta = currentHeading - imageBaseHeading
            var imageNextPos = 60 + delta
            $("#exit").css("left", imageNextPos + "px")

        }, function(compassError) {
            alert('Compass error: ' + compassError.code);
        }, {
            frequency: 1000
        });

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

$("#exit").click(function(){

    // Set image in middle
    $(this).css("left", "60px");
    imageBaseHeading = currentHeading;

});

$("#heading").click(function(){
    alert($("#exit").css("left"))

});

app.initialize();


