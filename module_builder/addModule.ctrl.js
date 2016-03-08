(function() {
    'use strict';
    
    angular
        .module('moduleBuild')
        .controller('ModuleInputCtrl',  ModuleInputCtrl );     
     
   ModuleInputCtrl.$inject = ['$state'];
    
    function ModuleInputCtrl($state){
        var ctrl = this;
        //variables
        ctrl.name = "Challenge 1"
        ctrl.content = 'hi';
        ctrl.codeStarter="var greeting = 'Hello World!';\nvar name = 'matt';";
        ctrl.jsonOutput;
        ctrl.codeTest =  "var pass=true;\n\nvar msg='Good job!';\n\nif (!name){\n pass = false;\n msg = 'There is no varialbe named name';\n};\n\nreturn [pass,msg]";
       
       //function declarations
        ctrl.submitContent = submitContent;
        ctrl.codeParser = codeParser;
        
       /////////////////////////////////
        function submitContent(){
            
            ctrl.codeParser();
            var payload = {
                name:ctrl.name,
                html:ctrl.content,
                code:{
                    startingCode: ctrl.codeStarter,
                    testCode:ctrl.stringCodeTest
                },
                output:'html'
            }
            
            ctrl.jsonOutput = JSON.stringify(payload);
        }
        
        function codeParser(){
                ctrl.stringCodeTest = (ctrl.codeTest).replace(/(\n)|(\r)|(\t)+/g,"");
        }
        
    }
    
    
})();
