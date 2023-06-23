const {PDFDocument} = require('pdf-lib');
const {readFile, writeFile} = require('fs/promises');

async function createPdf(input, output) {
    try {
        const pdfDoc = await PDFDocument.load(await readFile(input));

        //Modify doc and fill forms
        const fieldNames = pdfDoc
            .getForm()
            .getFields()
            .map(f => f.getName());
        console.log({ fieldNames });

        const form = pdfDoc.getForm();


        // Populate the form fields here
        form.getTextField('topmostSubform[0].Page1[0].Step1a[0].topmostSubform[0].Page1[0].Step1a[0].f1_01[0]').setText('John'); // fw4 name e.g.

        form.getTextField('topmostSubform[0].Page1[0].Step1a[0].f1_02[0]').setText('pdf/Dave_Leduc_Signature.svg'); // fw4 ssn e.g.



        form.getTextField('topmostSubform[0].Page1[0].Step1a[0].f1_03[0]').setText('10324 Foot Drive Dr'); // fw4 ssn e.g.

        form.getTextField('topmostSubform[0].Page1[0].Step1a[0].f1_04[0]').setText('20856'); // fw4 ssn e.g.



        //form.getTextField('topmostSubform[0].Page1[0].Last_Name_Family_Name[0]').setText('123456789'); // fw4 ssn e.g.
        //form.getTextField('topmostSubform[0].Page1[0].Last_Name_Family_Name[0]').setText('9'); // fw4 ssn e.g.

        const pdfBytes = await pdfDoc.save();

        await writeFile(output, pdfBytes);
        console.log('PDF created!');

    } catch (error) {
        console.log(error);
    }
}


// If pdf is locked, and you get encryption notice go to I love pdf and unlock it. Don't
//ignore encryption.

//createPdf('pdf/i-9-paper-version_unlocked.pdf', 'output.pdf')

createPdf('pdf/fw4_unlocked.pdf', 'output.pdf')
