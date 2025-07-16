#ifndef PERSONARRAY_H
#define PERSONARRAY_H

#include "Person.h"

class PersonArray {
		int size;
		Person **data;
	public:
		PersonArray() {
			this->size = 0;
			this->data = new Person*[0];
		}
		

};

#endif
