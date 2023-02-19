describe("Login Page Test Case", () => {

    it("User login with invalid email", () => {
        cy.visit("https://kasirdemo.belajarqa.com")
        cy.get('#email').type("aaa@gm.@com")
        cy.get('#password').type("12345")
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        cy.on("window:alert", (text) => {
            expect(text).to.contains('"email" must be a valid email')
        })
        cy.wait(2000)
    })

    it("User login with invalid password", () => {
        cy.visit("https://kasirdemo.belajarqa.com")
        cy.get('#email').type("aaa@gm.com")
        cy.get('#password').type("123456")
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        cy.on("window:alert", (text) => {
            expect(text).to.contains("Kredensial yang Anda berikan salah")
        })
        cy.wait(2000)
    })
    
    it("User login with valid username and password", () => {
        cy.visit("https://kasirdemo.belajarqa.com")
        cy.get('#email').type("aaa@gm.com")
        cy.get('#password').type("12345")
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        cy.url().should('include', '/dashboard')
        cy.contains("kasirAja")
        
        cy.wait(2000)
    })

    it("User logout", () => {
        cy.viewport(1537, 976)
        cy.get('#menu-button-14').click()
        cy.get('#menu-list-14-menuitem-12').click()
        cy.contains('hai, kasirAja')
    })

})