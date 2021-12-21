# Note Taker Starter Code

WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
  
 Opening page provided with starter code

WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

Button uses note route to be taken to the note page

WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page

Save icon hidden display taken away when both fields have content inputted

WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

Save icon uses post route to enter user inputted data into db.json 

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column

Uses get route to grab chosen tab and allow user to edit it

WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

When clicked resets the current note to original settings
