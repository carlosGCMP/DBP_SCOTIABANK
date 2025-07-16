#ifndef PERSON_H
#define PERSON_H

#include <sstream>

class Person{
	protected:
		std::string name;
		int age;
	public:
		Person(std::string name, int age):
				name{name}, age{age}{}
		void setName(std::string name) {
			this->name = name;
		}
		void setAge(int age) {
			this->age = age;
		}
		std::string getName() const {
			return this->name;
		}
		int getAge() const {
			return this->age;
		}
		virtual std::string toString() const {
			std::stringstream ss;
			ss << "El nombre es: " << this->name <<
					". La edad es: " << this-> age;
			return ss.str();
		}
};

#endif
