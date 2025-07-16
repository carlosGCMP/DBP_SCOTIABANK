1#include <iostream>
#include "Person.h"
#include "Student.h"
#include "Professor.h"

using namespace std;

int main() {
	Person p("Alvaro", 20);
	cout << p.toString() << endl;

	Student s("Juan", 19, 234523, "CS");
	cout << s.toString() << endl;

	Professor prof("Edgar", 60, 32423423, "DCS");
	cout << prof.toString() << endl;
	
	Person *ptr = &p;
	cout << ptr->toString() << endl;

	ptr = &s;
	cout << ptr->toString() << endl;

	ptr = &prof;
	cout << ptr->toString() << endl;
}
