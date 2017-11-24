const fs=require('fs');

var saveNode =(notes) =>{
	fs.writeFileSync('notes_Data.js',JSON.stringify(notes));
}

var fetchNode =() =>{
	try{
	var existingDataFromFile=fs.readFileSync('notes_Data.js');	
	return JSON.parse(existingDataFromFile);
	}catch(error){
		return [];
	}finally {  
}
}
var addNote = (title,body) =>{
	console.log('addNoteMethod:',title,body);
	var notes = fetchNode();
	var note={
		title,body
	};
	
	var duplicateNotes = notes.filter((note) => {
	if(note.title == title)
		{
			return note;
		}
	});
	console.log('duplicateNotes :',duplicateNotes, duplicateNotes.length);
	
	if(duplicateNotes.length === 0)//it will stop adding duplicate entry
	{
	notes.push(note);
	saveNode(notes);
	}
};

var listNote = (title,body) =>{
	
	var notes = fetchNode();
	
	var duplicateNotes = notes.filter((note) => {
	console.log(note.title,note.body);
	});
	
};

var readNote = (title) =>{
	console.log('readNoteMethod:');
	var notes = fetchNode();
	
	
	var duplicateNotes = notes.filter((note) => {
	if(note.title === title)
		{
			console.log(note.title,note.body);
			return note;//return the matched note
		}
	});
	
	if(duplicateNotes.length !== 0)//return asked entry
	{
		//console.log(note.title,note.body);
	return duplicateNotes;
	}
};

var deleteNote = (title) =>{
	console.log('deleteNoteMethod:');
	var notes = fetchNode();
	var newNotes =[];
	
	
	var duplicateNotes = notes.filter((note) => {
	if(note.title !== title)
		{
			newNotes.push(note);
			return notes;//return the notes aaray after removing entry
		}
	});
	
	saveNode(newNotes);
};

module.exports = {
	addNote,
	listNote,
	readNote,
	deleteNote
};