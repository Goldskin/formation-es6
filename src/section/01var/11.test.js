test('var11', () => {
    for (var i = 0; i < 6; i++) {
        setTimeout(() => {
            console.log('inside loop', i)
        })
    }

    console.log('outside loop', i)
});