#include <iostream>

using namespace std;

int main () {
    int n;
    cin >> n;
    int maxx;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;

        if (i == 0) {
            maxx = x;
        } else if (maxx < x) {
            maxx = x;
        }
    }

    cout << maxx << endl;
    return 0;
}
