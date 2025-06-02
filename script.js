let dialogueOpen = false;

function toggleDialogue() {
  const contacts = document.getElementById('contacts');
  const blurScreen = document.getElementById('blurScreen');
  const list = document.getElementById('contactList');

  if (dialogueOpen) {
      // Hide it
      list.style.opacity = '0';
      contacts.style.width = '0';
      contacts.style.opacity = '0';
      blurScreen.style.opacity = '0';
      blurScreen.style.width = '0';
    } else {
      // Show it
      list.style.opacity = '1';
      contacts.style.width = '300px';
      contacts.style.opacity = '1';
      blurScreen.style.opacity = '1';
      blurScreen.style.width = '100vw';
    }

    dialogueOpen = !dialogueOpen;
  }