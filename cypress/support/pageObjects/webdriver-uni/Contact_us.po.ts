class contactus{
       contactform_Submission(firstName: string,lastname: string,email:string,comment: string,$selector:string,textToLocate:string){
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastname);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate);
       }
}
export default contactus;