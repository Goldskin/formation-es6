test('des09', () => {
    const alphabetGrec = [
        'α',
        'β',
        'γ',
        'δ',
        'ε'
    ]

    const [alpha, beta, ...rest] = alphabetGrec

    console.log(rest)
});