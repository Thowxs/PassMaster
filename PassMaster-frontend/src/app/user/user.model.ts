export class User {
    id ?: number;
    firstName ?: string;
    lastName ?: string;
    mail ?: string;
    pass ?: string;
    friends ?: User[];
    profilePicture ?: File;
  
    constructor(id ?: number, firstName ?: string, lastName ?: string, mail ?: string, pass ?: string, friends ?: User[], profilePicture ?: File) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.mail = mail;
      this.pass = pass;
      this.friends = friends;
      this.profilePicture = profilePicture;
    }
  }
  