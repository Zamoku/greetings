describe("Testing greet exercise", function(){
    // it("should return all the values entered",function(){
    //     var greetings =  Greetings();
    //     greetings.setGreet("Nomzamo", "Muleka", "isiXhosa")
    //     console.log(greetings.howManyGreetings());
    //     console.log(greetings.getLanguageGreet());

    //     assert.equal("Molo, Nomzamo Muleka",greetings.getGreet())


    //     var greetings2 =  Greetings();
    //     greetings2.setGreet("Zandile", "Mjoli", "Afrikaans")
    //     assert.equal("Hallo, Zandile Mjoli",greetings2.getGreet())
    // })
    it("should return the counter of greeting",function(){
        var greetings =  Greetings();
        greetings.countGreet();
        greetings.countGreet();
        assert.equal(2,greetings.greetedCounter())



        var greetings2 =  Greetings();
        greetings2.countGreet();
        greetings2.countGreet();
        greetings2.countGreet();
        assert.equal(3,greetings.greetedCounter())

    })
    it("should return the greeting according to the language selected",function(){
        var greetings =  Greetings();
        greetings.setLanguageGreet("isiXhosa", "Nomzamo", "Muleka");
        assert.equal("Molo, Nomzamo Muleka", greetings.getLanguageGreet())

        var greetings2 =  Greetings();
        greetings2.setLanguageGreet("English", "Zandile", "Mjoli");
        assert.equal("Hello, Zandile Mjoli", greetings2.getLanguageGreet())

        var greetings3 =  Greetings();
        greetings3.setLanguageGreet("Afrikaans", "Nomzamo", "Peter");
        assert.equal("Hallo, Nomzamo Peter", greetings3.getLanguageGreet())



    })
})