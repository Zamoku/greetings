describe("Testing greet exercise", function(){
//     it("should return the greeting message",function(){
//         var greetings =  Greetings();
//         greetings.setGreet("Nomzamo", "isiXhosa")
//        // console.log(greetings.getGreet());
//        // console.log(greetings.getGreet());
//         assert.equal("Molo, Nomzamo",greetings.getGreet())


//         var greetings2 =  Greetings();
//         greetings2.setGreet("Zandile", "Afrikaans")
//         assert.equal("Hallo, Zandile",greetings2.getGreet())
//     })
//     it("should return the counter of greeting",function(){
//         var greetings =  Greetings();
//        // greetings.setGreet("Nomzamo", "English")
//        // greetings.countGreet();
//         assert.equal(1,greetings.countGreet())



//         var greetings2 =  Greetings();
//         //greetings2.setGreet("Nomzamo", "Muleka", "isiXhosa")
//         //greetings2.setGreet("Nomzamo", "Muleka", "isiXhosa")
//         greetings2.setGreet("Nomzamo", "Muleka", "isiXhosa")
//         assert.equal(3,greetings2.countGreet())

//     })
//     it("should check if the name added is real word and have no other characters",function(){
//         var greetings =  Greetings();
//         greetings.testRegex("Nomzamo");
//         assert.equal("Please check name and", greetings.testRegex())

       



//    })
    //     it("should check for duplicates",function(){
    //         var greetings =  Greetings();
    //         greetings.setDuplicate("Nomzamo")
    //         greetings.setDuplicate("Nomzamo")
    //         assert.equal("You have entered a duplicate", greetings.getDuplicate())
            


    //         var greetings2 =  Greetings();
    //         greetings2.setDuplicate("Nomzamo")
    //         greetings2.setDuplicate("Nomfundo")
    //         assert.equal("No duplicates", greetings2.getDuplicate())
    //  })
    it("should check for unwanted characters in Name",function(){
            var greetings =  Greetings();
            greetings.regexCheck("Nomzamo3")
            assert.equal("wrong characters", greetings.getregexCheck())
            


            // var greetings2 =  Greetings();
            // greetings2.setDuplicate("Nomzamo")
            // greetings2.setDuplicate("Nomfundo")
            // assert.equal("No duplicates", greetings2.getDuplicate())
     })
    

})