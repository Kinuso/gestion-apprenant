#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: GA_Role
#------------------------------------------------------------

CREATE TABLE GA_Role(
        Role_ID   Int NOT NULL ,
        Role_Name Varchar (50) NOT NULL
	,CONSTRAINT GA_Role_PK PRIMARY KEY (Role_ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: GA_User
#------------------------------------------------------------

CREATE TABLE GA_User(
        User_ID        Int  Auto_increment  NOT NULL ,
        User_FirstName Varchar (50) NOT NULL ,
        User_LastName  Varchar (50) NOT NULL ,
        User_Password  Varchar (255) NOT NULL ,
        User_Activated TinyINT NOT NULL ,
        User_Email     Varchar (255) NOT NULL ,
        Role_ID        Int NOT NULL
	,CONSTRAINT GA_User_AK UNIQUE (User_Email)
	,CONSTRAINT GA_User_PK PRIMARY KEY (User_ID)

	,CONSTRAINT GA_User_GA_Role_FK FOREIGN KEY (Role_ID) REFERENCES GA_Role(Role_ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: GA_Class
#------------------------------------------------------------

CREATE TABLE GA_Class(
        Class_ID     Int  Auto_increment  NOT NULL ,
        Class_Name   Varchar (50) NOT NULL ,
        Class_Start  Date NOT NULL ,
        Class_Finish Date NOT NULL ,
        Class_Places Int NOT NULL
	,CONSTRAINT GA_Class_PK PRIMARY KEY (Class_ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: GA_Classroom
#------------------------------------------------------------

CREATE TABLE GA_Classroom(
        Classroom_ID    Int  Auto_increment  NOT NULL ,
        Classroom_Name  Varchar (50) NOT NULL ,
        Classroom_Date  Date NOT NULL ,
        Classroom_Start Time NOT NULL ,
        Classroom_End   Time NOT NULL ,
        Classroom_Class Int NOT NULL ,
        Classroom_Code  Int NOT NULL
	,CONSTRAINT GA_Classroom_PK PRIMARY KEY (Classroom_ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: UserHasClass
#------------------------------------------------------------

CREATE TABLE UserHasClass(
        Class_ID Int NOT NULL ,
        User_ID  Int NOT NULL
	,CONSTRAINT UserHasClass_PK PRIMARY KEY (Class_ID,User_ID)

	,CONSTRAINT UserHasClass_GA_Class_FK FOREIGN KEY (Class_ID) REFERENCES GA_Class(Class_ID)
	,CONSTRAINT UserHasClass_GA_User0_FK FOREIGN KEY (User_ID) REFERENCES GA_User(User_ID)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: UserHasClassRoom
#------------------------------------------------------------

CREATE TABLE UserHasClassRoom(
        Classroom_ID   Int NOT NULL ,
        User_ID        Int NOT NULL ,
        User_IsLate    TinyINT NOT NULL ,
        User_IsMissing TinyINT NOT NULL
	,CONSTRAINT UserHasClassRoom_PK PRIMARY KEY (Classroom_ID,User_ID)

	,CONSTRAINT UserHasClassRoom_GA_Classroom_FK FOREIGN KEY (Classroom_ID) REFERENCES GA_Classroom(Classroom_ID)
	,CONSTRAINT UserHasClassRoom_GA_User0_FK FOREIGN KEY (User_ID) REFERENCES GA_User(User_ID)
)ENGINE=InnoDB;

