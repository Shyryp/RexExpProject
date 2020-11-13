const regex = /\#([4-9A-C][0-9A-F])\1{2}|[Rr][Gg][Bb]\(((([6-9][0-9]),\4,\4)|(([1][0-9][0-9]),\6,\6)|(([2][0][0-7]),\8,\8))\)/gm;
const str = `#716064
#101010
#606160
#909190
#9090 90
#90 9090
#AAAA AA
#ABBBAB
#B0B0B1
RGB(100,100,100,)
RGB(209,209,209)
RGB(140,150,160,)
RGB(140,150,160)
RGB(0,0,0)
RGB(59,59,59)
RGB(099,099,099)


#606060
#505050
#909090
#C0C0C0
#CFCFCF
#ABABAB
#B0B0B0
RGB(60,60,60)
RGB(100,100,100)
RGB(200,200,200)
RGB(207,207,207)
RGB(99,99,99)
`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
