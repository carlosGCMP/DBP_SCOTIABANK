#ifndef STUDENT_H
#define STUDENT_H

#include "Person.h"

class Student : public Person {
		int cui;
		std::string school;
	public:
		Student(std::string name, int age, int cui,
				std::string school) :
			Person(name, age), cui{cui}, school{school}{}
		void setCUI(int cui) {
			this->cui = cui;
		}
		void setSchool(std::string school) {
			this->school = school;
		}
		int getCUI() const {
			return this->cui;
		}
		std::string getSchool() const {
			return this->school;	
		}

		std::string toString() const {
			std::stringstream ss;
			ss << "El nombre es: " << this->name 
				<< ". La edad es: " << this->age
				<< ". El cui es: " << this->cui
				<< ". La escuela es: " << this->school;
			return ss.str();
		}
		
};

#endif
