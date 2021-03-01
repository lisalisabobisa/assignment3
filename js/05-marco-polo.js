

for (let i = 1; i <= 100; i++) {
    if (i % 3 && i % 5 ) {
        document.write(i);
    } else {
        if (i % 3 === 0) {
            document.write("marco");
        }
        if (i % 5 === 0) {
            document.write("polo");
        }
    }
    document.write("<br>");
}

