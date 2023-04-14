/*
1. Buatlah fungsi callback untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan.
2. Buatlah promise untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan, boleh dengan mengubah fungsi callback pada nomor 1 untuk dijadikan promise.

3. Dengan menggunakan:
1) Callback pada nomor 1;
2) Promise pada nomor 2;
3) Async await menggunakan promise pada nomor 2.

Selesaikan permasalahan matematika di bawah ini:



a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12
b. 500 - 625 / 5 + 84 / 12 * 96 / 12
c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
f. 500 / 100 * 20 + 84 * 2 - 125 / 5
g. 375 * 2 - 750 / 25 + 1000 / 500
h. 12 * 12 * 2 - 84 + 96 ** 2
i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2
*/

const callbackAritmatika = (angka1, angka2, operator, callback) => {
    if (operator == 'tambah' || operator == '+') {
        callback(angka1 + angka2);
    } else if (operator == 'kurang' || operator == '-') {
        callback(angka1 - angka2);
    } else if (operator == 'kali' || operator == '*') {
        callback(angka1 * angka2);
    } else if (operator == 'bagi' || operator == '/') {
        callback(angka1 / angka2);
    } else if (operator == 'pangkat' || operator == '**') {
        callback(angka1 ** angka2);
    } else {
        console.log('Operator tidak valid');
    }
};

const execCallbackAritmatika = () => {
    console.log('soal = 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12');
    callbackAritmatika(375, 125, '/', (hasil1) => {
        callbackAritmatika(hasil1, 3, '*', (hasil2) => {
            callbackAritmatika(hasil2, 2, '**', (hasil3) => {
                callbackAritmatika(hasil3, 750, '-', (hasil4) => {
                    callbackAritmatika(hasil4, 96, '+', (hasil5) => {
                        callbackAritmatika(hasil5, 10, '*', (hasil6) => {
                            callbackAritmatika(hasil6, 84, '*', (hasil7) => {
                                callbackAritmatika(hasil7, 12, '/', (hasil8) => {
                                    console.log('a.', hasil8);
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 500 - 625 / 5 + 84 / 12 * 96 / 12');
    callbackAritmatika(500, 625, '-', (hasil1) => {
        callbackAritmatika(hasil1, 5, '/', (hasil2) => {
            callbackAritmatika(hasil2, 84, '+', (hasil3) => {
                callbackAritmatika(hasil3, 12, '/', (hasil4) => {
                    callbackAritmatika(hasil4, 96, '*', (hasil5) => {
                        callbackAritmatika(hasil5, 12, '/', (hasil6) => {
                            console.log('b.', hasil6);
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84');
    callbackAritmatika(750, 2, '/', (hasil1) => {
        callbackAritmatika(hasil1, 125, '+', (hasil2) => {
            callbackAritmatika(hasil2, 5, '/', (hasil3) => {
                callbackAritmatika(hasil3, 96, '*', (hasil4) => {
                    callbackAritmatika(hasil4, 12, '/', (hasil5) => {
                        callbackAritmatika(hasil5, 375, '+', (hasil6) => {
                            callbackAritmatika(hasil6, 84, '*', (hasil7) => {
                                console.log('c.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250');
    callbackAritmatika(1000, 750, '-', (hasil1) => {
        callbackAritmatika(hasil1, 125, '/', (hasil2) => {
            callbackAritmatika(hasil2, 12, '-', (hasil3) => {
                callbackAritmatika(hasil3, 96, '+', (hasil4) => {
                    callbackAritmatika(hasil4, 10, '*', (hasil5) => {
                        callbackAritmatika(hasil5, 500, '*', (hasil6) => {
                            callbackAritmatika(hasil6, 250, '/', (hasil7) => {
                                console.log('d.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 36 ** 2 / 72 + 125 * 10 - 24 * 3');
    callbackAritmatika(36, 2, '**', (hasil1) => {
        callbackAritmatika(hasil1, 72, '/', (hasil2) => {
            callbackAritmatika(hasil2, 125, '+', (hasil3) => {
                callbackAritmatika(hasil3, 10, '*', (hasil4) => {
                    callbackAritmatika(hasil4, 24, '-', (hasil5) => {
                        callbackAritmatika(hasil5, 3, '*', (hasil6) => {
                            console.log('e.', hasil6);
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 500 / 100 * 20 + 84 * 2 - 125 / 5');
    callbackAritmatika(500, 100, '/', (hasil1) => {
        callbackAritmatika(hasil1, 20, '*', (hasil2) => {
            callbackAritmatika(hasil2, 84, '+', (hasil3) => {
                callbackAritmatika(hasil3, 2, '*', (hasil4) => {
                    callbackAritmatika(hasil4, 125, '-', (hasil5) => {
                        callbackAritmatika(hasil5, 5, '/', (hasil6) => {
                            console.log('f.', hasil6);
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 375 * 2 - 750 / 25 + 1000 / 500');
    callbackAritmatika(375, 2, '*', (hasil1) => {
        callbackAritmatika(hasil1, 750, '-', (hasil2) => {
            callbackAritmatika(hasil2, 25, '/', (hasil3) => {
                callbackAritmatika(hasil3, 1000, '+', (hasil4) => {
                    callbackAritmatika(hasil4, 500, '/', (hasil5) => {
                        console.log('g.', hasil5);
                    });
                });
            });
        });
    });

    console.log('soal = 12 * 12 * 2 - 84 + 96 ** 2');
    callbackAritmatika(12, 12, '*', (hasil1) => {
        callbackAritmatika(hasil1, 2, '*', (hasil2) => {
            callbackAritmatika(hasil2, 84, '-', (hasil3) => {
                callbackAritmatika(hasil3, 96, '+', (hasil4) => {
                    callbackAritmatika(hasil4, 2, '**', (hasil5) => {
                        console.log('h.', hasil5);
                    });
                });
            });
        });
    });

    console.log('soal = 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12');
    callbackAritmatika(750, 25, '/', (hasil1) => {
        callbackAritmatika(hasil1, 375, '*', (hasil2) => {
            callbackAritmatika(hasil2, 125, '/', (hasil3) => {
                callbackAritmatika(hasil3, 72, '*', (hasil4) => {
                    callbackAritmatika(hasil4, 12, '/', (hasil5) => {
                        callbackAritmatika(hasil5, 84, '+', (hasil6) => {
                            callbackAritmatika(hasil6, 12, '*', (hasil7) => {
                                console.log('i.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('96 / 12 ** 2 + 625 / 5 - 375 * 84');
    callbackAritmatika(96, 12, '/', (hasil1) => {
        callbackAritmatika(hasil1, 2, '**', (hasil2) => {
            callbackAritmatika(hasil2, 625, '+', (hasil3) => {
                callbackAritmatika(hasil3, 5, '/', (hasil4) => {
                    callbackAritmatika(hasil4, 375, '-', (hasil5) => {
                        callbackAritmatika(hasil5, 84, '*', (hasil6) => {
                            console.log('j.', hasil6);
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10');
    callbackAritmatika(250, 25, '/', (hasil1) => {
        callbackAritmatika(hasil1, 10, '*', (hasil2) => {
            callbackAritmatika(hasil2, 36, '+', (hasil3) => {
                callbackAritmatika(hasil3, 2, '**', (hasil4) => {
                    callbackAritmatika(hasil4, 72, '/', (hasil5) => {
                        callbackAritmatika(hasil5, 125, '-', (hasil6) => {
                            callbackAritmatika(hasil6, 10, '*', (hasil7) => {
                                console.log('k.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10');
    callbackAritmatika(375, 125, '/', (hasil1) => {
        callbackAritmatika(hasil1, 100, '*', (hasil2) => {
            callbackAritmatika(hasil2, 500, '+', (hasil3) => {
                callbackAritmatika(hasil3, 250, '/', (hasil4) => {
                    callbackAritmatika(hasil4, 50, '*', (hasil5) => {
                        callbackAritmatika(hasil5, 96, '-', (hasil6) => {
                            callbackAritmatika(hasil6, 10, '*', (hasil7) => {
                                console.log('l.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2');
    callbackAritmatika(750, 25, '/', (hasil1) => {
        callbackAritmatika(hasil1, 375, '-', (hasil2) => {
            callbackAritmatika(hasil2, 125, '/', (hasil3) => {
                callbackAritmatika(hasil3, 96, '+', (hasil4) => {
                    callbackAritmatika(hasil4, 2, '**', (hasil5) => {
                        callbackAritmatika(hasil5, 12, '/', (hasil6) => {
                            callbackAritmatika(hasil6, 2, '**', (hasil7) => {
                                console.log('m.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12');
    callbackAritmatika(1000, 500, '/', (hasil1) => {
        callbackAritmatika(hasil1, 375, '*', (hasil2) => {
            callbackAritmatika(hasil2, 125, '/', (hasil3) => {
                callbackAritmatika(hasil3, 72, '*', (hasil4) => {
                    callbackAritmatika(hasil4, 12, '/', (hasil5) => {
                        callbackAritmatika(hasil5, 84, '-', (hasil6) => {
                            callbackAritmatika(hasil6, 12, '*', (hasil7) => {
                                console.log('n.', hasil7);
                            });
                        });
                    });
                });
            });
        });
    });

    console.log('soal = 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2');
    callbackAritmatika(96, 12, '/', (hasil1) => {
        callbackAritmatika(hasil1, 2, '**', (hasil2) => {
            callbackAritmatika(hasil2, 500, '-', (hasil3) => {
                callbackAritmatika(hasil3, 250, '/', (hasil4) => {
                    callbackAritmatika(hasil4, 375, '*', (hasil5) => {
                        callbackAritmatika(hasil5, 125, '/', (hasil6) => {
                            callbackAritmatika(hasil6, 84, '+', (hasil7) => {
                                callbackAritmatika(hasil7, 2, '*', (hasil8) => {
                                    console.log('o.', hasil8);
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    console.log('==========');
};
const promiseAritmatika = (angka1, angka2, operator) => {
    const p = new Promise((resolve, reject) => {
        if (typeof angka1 != 'number' || typeof angka2 != 'number') {
            reject('Ada error coy')
        } else {
            if (operator == 'tambah' || operator == '+') {
                resolve(angka1 + angka2);
            } else if (operator == 'kurang' || operator == '-') {
                resolve(angka1 - angka2);
            } else if (operator == 'kali' || operator == '*') {
                resolve(angka1 * angka2);
            } else if (operator == 'bagi' || operator == '/') {
                resolve(angka1 / angka2);
            } else if (operator == 'pangkat' || operator == '**') {
                resolve(angka1 ** angka2);
            } else {
                console.log('Operator tidak valid.');
            }
        }
    });
    return p;

};

const execPromiseAritmatika = () => {
    Promise.all([
            promiseAritmatika(375, 125, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 3, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 750, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 10, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            }),

            promiseAritmatika(500, 625, '-')
            .then((hasil) => {
                return promiseAritmatika(hasil, 5, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            }),

            promiseAritmatika(750, 2, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 5, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 375, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '*');
            }),

            promiseAritmatika(1000, 750, '-')
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 10, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 500, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 250, '/');
            }),

            promiseAritmatika(36, 2, '**')
            .then((hasil) => {
                return promiseAritmatika(hasil, 72, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 10, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 24, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 3, '*');
            }),

            promiseAritmatika(500, 100, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 20, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 5, '/');
            }),

            promiseAritmatika(375, 2, '*')
            .then((hasil) => {
                return promiseAritmatika(hasil, 750, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 25, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 1000, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 500, '/');
            }),

            promiseAritmatika(12, 12, '*')
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            }),

            promiseAritmatika(750, 25, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 375, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 72, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '*');
            }),

            promiseAritmatika(96, 12, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 625, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 5, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 375, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '*');
            }),

            promiseAritmatika(250, 25, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 10, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 36, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 72, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 10, '*');
            }),

            promiseAritmatika(375, 125, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 100, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 500, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 250, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 50, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 10, '*');
            }),

            promiseAritmatika(750, 25, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 375, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 96, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            }),

            promiseAritmatika(1000, 500, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 375, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 72, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 12, '*');
            }),

            promiseAritmatika(96, 12, '/')
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '**');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 500, '-');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 250, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 375, '*');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 125, '/');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 84, '+');
            })
            .then((hasil) => {
                return promiseAritmatika(hasil, 2, '*');
            }),
        ])
        .then(
            ([
                hasilA,
                hasilB,
                hasilC,
                hasilD,
                hasilE,
                hasilF,
                hasilG,
                hasilH,
                hasilI,
                hasilJ,
                hasilK,
                hasilL,
                hasilM,
                hasilN,
                hasilO,
            ]) => {
                console.log('a.', hasilA);
                console.log('b.', hasilB);
                console.log('c.', hasilC);
                console.log('d.', hasilD);
                console.log('e.', hasilE);
                console.log('f.', hasilF);
                console.log('g.', hasilG);
                console.log('h.', hasilH);
                console.log('i.', hasilI);
                console.log('j.', hasilJ);
                console.log('k.', hasilK);
                console.log('l.', hasilL);
                console.log('m.', hasilM);
                console.log('n.', hasilN);
                console.log('o.', hasilO);
            }
        )
        .catch((error) => {
            console.log(error);
        });
};

const execAsyncAwait = () => {
    const promiseAsyncAwaitA = async () => {
        try {
            let hasil = await promiseAritmatika(375, 125, '/');
            hasil = await promiseAritmatika(hasil, 3, '*');
            hasil = await promiseAritmatika(hasil, 2, '**');
            hasil = await promiseAritmatika(hasil, 750, '-');
            hasil = await promiseAritmatika(hasil, 96, '+');
            hasil = await promiseAritmatika(hasil, 10, '*');
            hasil = await promiseAritmatika(hasil, 84, '*');
            hasil = await promiseAritmatika(hasil, 12, '/');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitB = async () => {
        try {
            let hasil = await promiseAritmatika(500, 625, '-');
            hasil = await promiseAritmatika(hasil, 5, '/');
            hasil = await promiseAritmatika(hasil, 84, '+');
            hasil = await promiseAritmatika(hasil, 12, '/');
            hasil = await promiseAritmatika(hasil, 96, '*');
            hasil = await promiseAritmatika(hasil, 12, '/');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitC = async () => {
        try {
            let hasil = await promiseAritmatika(750, 2, '/');
            hasil = await promiseAritmatika(hasil, 125, '+');
            hasil = await promiseAritmatika(hasil, 5, '/');
            hasil = await promiseAritmatika(hasil, 96, '*');
            hasil = await promiseAritmatika(hasil, 12, '/');
            hasil = await promiseAritmatika(hasil, 375, '+');
            hasil = await promiseAritmatika(hasil, 84, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitD = async () => {
        try {
            let hasil = await promiseAritmatika(1000, 750, '-');
            hasil = await promiseAritmatika(hasil, 125, '/');
            hasil = await promiseAritmatika(hasil, 12, '-');
            hasil = await promiseAritmatika(hasil, 96, '+');
            hasil = await promiseAritmatika(hasil, 10, '*');
            hasil = await promiseAritmatika(hasil, 500, '*');
            hasil = await promiseAritmatika(hasil, 250, '/');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitE = async () => {
        try {
            let hasil = await promiseAritmatika(36, 2, '**');
            hasil = await promiseAritmatika(hasil, 72, '/');
            hasil = await promiseAritmatika(hasil, 125, '+');
            hasil = await promiseAritmatika(hasil, 10, '*');
            hasil = await promiseAritmatika(hasil, 24, '-');
            hasil = await promiseAritmatika(hasil, 3, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitF = async () => {
        try {
            let hasil = await promiseAritmatika(500, 100, '/');
            hasil = await promiseAritmatika(hasil, 20, '*');
            hasil = await promiseAritmatika(hasil, 84, '+');
            hasil = await promiseAritmatika(hasil, 2, '*');
            hasil = await promiseAritmatika(hasil, 125, '-');
            hasil = await promiseAritmatika(hasil, 5, '/');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitG = async () => {
        try {
            let hasil = await promiseAritmatika(375, 2, '*');
            hasil = await promiseAritmatika(hasil, 750, '-');
            hasil = await promiseAritmatika(hasil, 25, '/');
            hasil = await promiseAritmatika(hasil, 1000, '+');
            hasil = await promiseAritmatika(hasil, 500, '/');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitH = async () => {
        try {
            let hasil = await promiseAritmatika(12, 12, '*');
            hasil = await promiseAritmatika(hasil, 2, '*');
            hasil = await promiseAritmatika(hasil, 84, '-');
            hasil = await promiseAritmatika(hasil, 96, '+');
            hasil = await promiseAritmatika(hasil, 2, '**');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitI = async () => {
        try {
            let hasil = await promiseAritmatika(750, 25, '/');
            hasil = await promiseAritmatika(hasil, 375, '*');
            hasil = await promiseAritmatika(hasil, 125, '/');
            hasil = await promiseAritmatika(hasil, 72, '*');
            hasil = await promiseAritmatika(hasil, 12, '/');
            hasil = await promiseAritmatika(hasil, 84, '+');
            hasil = await promiseAritmatika(hasil, 12, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitJ = async () => {
        try {
            let hasil = await promiseAritmatika(96, 12, '/');
            hasil = await promiseAritmatika(hasil, 2, '**');
            hasil = await promiseAritmatika(hasil, 625, '+');
            hasil = await promiseAritmatika(hasil, 5, '/');
            hasil = await promiseAritmatika(hasil, 375, '-');
            hasil = await promiseAritmatika(hasil, 84, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitK = async () => {
        try {
            let hasil = await promiseAritmatika(250, 25, '/');
            hasil = await promiseAritmatika(hasil, 10, '*');
            hasil = await promiseAritmatika(hasil, 36, '+');
            hasil = await promiseAritmatika(hasil, 2, '**');
            hasil = await promiseAritmatika(hasil, 72, '/');
            hasil = await promiseAritmatika(hasil, 125, '-');
            hasil = await promiseAritmatika(hasil, 10, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitL = async () => {
        try {
            let hasil = await promiseAritmatika(375, 125, '/');
            hasil = await promiseAritmatika(hasil, 100, '*');
            hasil = await promiseAritmatika(hasil, 500, '+');
            hasil = await promiseAritmatika(hasil, 250, '/');
            hasil = await promiseAritmatika(hasil, 50, '*');
            hasil = await promiseAritmatika(hasil, 96, '-');
            hasil = await promiseAritmatika(hasil, 10, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitM = async () => {
        try {
            let hasil = await promiseAritmatika(750, 25, '/');
            hasil = await promiseAritmatika(hasil, 375, '-');
            hasil = await promiseAritmatika(hasil, 125, '/');
            hasil = await promiseAritmatika(hasil, 96, '+');
            hasil = await promiseAritmatika(hasil, 2, '**');
            hasil = await promiseAritmatika(hasil, 12, '/');
            hasil = await promiseAritmatika(hasil, 2, '**');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitN = async () => {
        try {
            let hasil = await promiseAritmatika(1000, 500, '/');
            hasil = await promiseAritmatika(hasil, 375, '*');
            hasil = await promiseAritmatika(hasil, 125, '/');
            hasil = await promiseAritmatika(hasil, 72, '*');
            hasil = await promiseAritmatika(hasil, 12, '/');
            hasil = await promiseAritmatika(hasil, 84, '-');
            hasil = await promiseAritmatika(hasil, 12, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };
    const promiseAsyncAwaitO = async () => {
        try {
            let hasil = await promiseAritmatika(96, 12, '/');
            hasil = await promiseAritmatika(hasil, 2, '**');
            hasil = await promiseAritmatika(hasil, 500, '-');
            hasil = await promiseAritmatika(hasil, 250, '/');
            hasil = await promiseAritmatika(hasil, 375, '*');
            hasil = await promiseAritmatika(hasil, 125, '/');
            hasil = await promiseAritmatika(hasil, 84, '+');
            hasil = await promiseAritmatika(hasil, 2, '*');
            return hasil;
        } catch (error) {
            console.log(error);
        }
    };

    const asyncAwait = async () => {
        let hasilA = await promiseAsyncAwaitA();
        let hasilB = await promiseAsyncAwaitB();
        let hasilC = await promiseAsyncAwaitC();
        let hasilD = await promiseAsyncAwaitD();
        let hasilE = await promiseAsyncAwaitE();
        let hasilF = await promiseAsyncAwaitF();
        let hasilG = await promiseAsyncAwaitG();
        let hasilH = await promiseAsyncAwaitH();
        let hasilI = await promiseAsyncAwaitI();
        let hasilJ = await promiseAsyncAwaitJ();
        let hasilK = await promiseAsyncAwaitK();
        let hasilL = await promiseAsyncAwaitL();
        let hasilM = await promiseAsyncAwaitM();
        let hasilN = await promiseAsyncAwaitN();
        let hasilO = await promiseAsyncAwaitO();
        console.log('==========');
        console.log('a.', hasilA);
        console.log('b.', hasilB);
        console.log('c.', hasilC);
        console.log('d.', hasilD);
        console.log('e.', hasilE);
        console.log('f.', hasilF);
        console.log('g.', hasilG);
        console.log('h.', hasilH);
        console.log('i.', hasilI);
        console.log('j.', hasilJ);
        console.log('k.', hasilK);
        console.log('l.', hasilL);
        console.log('m.', hasilM);
        console.log('n.', hasilN);
        console.log('o.', hasilO);
    };
    asyncAwait();
};

execCallbackAritmatika();
execPromiseAritmatika();
execAsyncAwait();