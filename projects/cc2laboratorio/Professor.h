#ifndef PROFESSOR_H
#define PROFESSOR_H

#include "Person.h"

class Professor : public Person {
		int id;
		std::string dpto;
	public:
		Professor(std::string name, int age, int id,
				std::string dpto) :
			Person(name, age), id{id}, dpto{dpto}{}
		void setID(int id) {
			this->id = id;
		}
		void setDpto(std::string dpto) {
			this->dpto = dpto;
		}
		int getId() const {
			return this->id;
		}
		std::string getDpto() const {
			return this->dpto;	
		}

		std::string toString() const {
			std::stringstream ss;
			ss << "El nombre es: " << this->name 
				<< ". La edad es: " << this->age
				<< ". El Id es: " << this->id
				<< ". El dpto es: " << this->dpto;
			return ss.str();
		}
		
};

#endif
