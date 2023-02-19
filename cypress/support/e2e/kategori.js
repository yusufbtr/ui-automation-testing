describe("Kategori Page Test Case", () => {

    it("User click Kategori", () => {
        cy.visit("https://kasirdemo.belajarqa.com")
        cy.get('#email').type("aaa@gm.com")
        cy.get('#password').type("12345")
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

        cy.url().should('include', '/dashboard')
        cy.contains("kasirAja")
        cy.viewport(1537, 976)
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6)').click()
        cy.wait(2000)
        cy.url().should('include', '/categories')
    })

    it("User create a new Kategori", () => {
        cy.viewport(1537, 976)
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').type("Minuman Kaleng")
        cy.get('#deskripsi').type("Minuman Bersoda")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        cy.url().should('include', '/categories')
        
        cy.contains('item ditambahkan')

    })

    it("User create a new Kategori and input field with empty value", () => {
        cy.viewport(1537, 976)
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.get('#nama').click()
        cy.get('#deskripsi').type("Minuman Bersoda")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()

        cy.on("window:alert", (text) => {
            expect(text).to.contains('"name" is not allowed to be empty')
        })

        cy.get('.chakra-heading > [href="/categories"]').click()

    })

    it("User update/edit Kategori", () => {
        cy.viewport(1537, 976)
        cy.get('#menu-button-52').click()
        cy.get('#menu-list-52-menuitem-49').click()
        cy.get('#nama').clear()
        cy.get('#deskripsi').clear()
        cy.get('#nama').type("Jas Hujan2")
        cy.wait(1000)
        cy.get('#deskripsi').type("Merek Agoda2")
        cy.wait(2000)
        cy.get('.chakra-button').click()
        cy.url().should('include', '/categories')
        
        cy.contains('item diubah')

    })


    it("User update/edit Kategori input field with empty value", () => {
        cy.viewport(1537, 976)
        cy.get('#menu-button-73').click()
        cy.get('#menu-list-73-menuitem-70').click()
        cy.get('#nama').clear()
        cy.get('#deskripsi').clear()
        cy.get('#nama').click()
        cy.get('#deskripsi').type("Merek Agoda2")
        cy.wait(2000)
        cy.get('.chakra-button').click()

        cy.on("window:alert", (text) => {
            expect(text).to.contains('"name" is not allowed to be empty')
        })

        cy.get('.chakra-heading > [href="/categories"]').click()

    })

    it("User search Kategori", () => {
        cy.viewport(1537, 976)
        cy.get('.chakra-input').click()
        cy.get('.chakra-input').type("Jas")
        cy.wait(2000)
        cy.contains('Jas')
        cy.get('.chakra-input').clear()
        cy.wait(2000)

    })

    it("User search Kategori with wrong nama kategori ", () => {
        cy.viewport(1537, 976)
        cy.get('.chakra-input').click()
        cy.get('.chakra-input').type("Jual")
        cy.wait(3000)
        cy.get('.chakra-input').clear()
        cy.wait(2000)
        cy.get('#menu-button-14').click()
        cy.wait(2000)
        cy.get('#menu-list-14-menuitem-12').click()

    })
    
})