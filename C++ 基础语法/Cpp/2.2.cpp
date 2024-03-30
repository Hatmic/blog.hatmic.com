#include <iostream>

using namespace std;

int main() {
    int x;
    cin >> x;

    if (x == 10) {
        cout << "ten" << endl;
    } else if (x <= 9) {
        cout << "small" << endl;
    } else if (x >= 100) {
        cout << "big" << endl;
    } else {
        cout << "other" << endl;
    }

    return 0;
}
