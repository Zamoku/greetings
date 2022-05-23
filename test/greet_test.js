describe("Testing greet exercise", function(){
    it("should return the greeting message",function(){
        var greetings =  Greetings();
        greetings.setGreet("Nomzamo", "Muleka", "isiXhosa")
        console.log(greetings.getGreet());
        console.log(greetings.getGreet());

        assert.equal("Molo, Nomzamo Muleka",greetings.getGreet())


        var greetings2 =  Greetings();
        greetings2.setGreet("Zandile", "Mjoli", "Afrikaans")
        assert.equal("Hallo, Zandile Mjoli",greetings2.getGreet())
    })
    it("should return the counter of greeting",function(){
        var greetings =  Greetings();
        greetings.setGreet("Nomzamo", "Muleka", "isiXhosa")
       // greetings.countGreet();
        assert.equal(1,greetings.countGreet())



        var greetings2 =  Greetings();
        greetings2.setGreet("Nomzamo", "Muleka", "isiXhosa")
        greetings2.setGreet("Nomzamo", "Muleka", "isiXhosa")
        greetings2.setGreet("Nomzamo", "Muleka", "isiXhosa")
        assert.equal(3,greetings2.countGreet())

    })
    // it("should return the greeting according to the language selected",function(){
    //     var greetings =  Greetings();
    //     greetings.setLanguageGreet("isiXhosa", "Nomzamo", "Muleka");
    //     assert.equal("Molo, Nomzamo Muleka", greetings.getLanguageGreet())

    //     var greetings2 =  Greetings();
    //     greetings2.setLanguageGreet("English", "Zandile", "Mjoli");
    //     assert.equal("Hello, Zandile Mjoli", greetings2.getLanguageGreet())

    //     var greetings3 =  Greetings();
    //     greetings3.setLanguageGreet("Afrikaans", "Nomzamo", "Peter");
    //     assert.equal("Hallo, Nomzamo Peter", greetings3.getLanguageGreet())



  //  })
        it("should check for duplicates",function(){
            var greetings =  Greetings();
            greetings.setDuplicate("Nomzamo")
            greetings.setDuplicate("Nomzamo")
            assert.equal("You have entered a duplicate", greetings.getDuplicate())
            


            var greetings2 =  Greetings();
            greetings2.setDuplicate("Nomzamo")
            greetings2.setDuplicate("Nomfundo")
            assert.equal("No duplicates", greetings2.getDuplicate())
     })

    

})