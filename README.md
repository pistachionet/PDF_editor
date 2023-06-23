# PDF_editor
This is a pdf_editor that uses the pdf-lib library to edit pdf fields in javascript


# Dependencies

1. node
2. node pdf-lib   ^1.17.1 version


# How to use it

After bassing in the efile to the createPdf parameter (input) you need to see what your file name will be after it has been edited in the parameter (output). Run it with node once and if the file is properly accesiable (if it is not encrypted if it is run it through a free anti encrypt converter) you will be retured the fields for the pdf in the terminal. In order to access and edit the fields you must use:
form.getTextField(< field name >).setText('< text >');

Finally, run it again and you will be returned a file in your directory with the name of what the output parameter was.
