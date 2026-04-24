# Chapter I: Introduction

## Turing Model

**Key insight:** ==All computation can be== performed by a universal machine that reads/writes symbols on an infinite tape

- *Note*: Key insight: separate DATA from PROGRAM — program is itself data
- **Turing Machine Components:**
	- Infinite tape — serves as unbounded memory (read/write cells)
	- Read/write head — positioned over one cell at a time
	- State table — finite list of instructions (the program)
	- Current state register — tracks which rule to apply next
- **Three Program/Data Scenarios:**
	- Same program + different data → different output
	- Different program + same data → different output
	- Same program + same data → always same output (deterministic)
- **Universal Turing Machine (UTM):**
	- Church-Turing Thesis: anything computable can be computed by a Turing machine
	- Halting Problem: Turing proved some problems are undecidable — no algorithm can solve them
	- Computability theory grew from this single model

## Von Neumann Model

**Key insight:** ==Store both program and== data in the same memory — the stored-program concept

- **Four Core Components:**
	- Memory — stores both program instructions AND data
	- ALU (Arithmetic Logic Unit) — performs calculations and logical comparisons
	- Control Unit — fetches instruction → decodes → executes (sequential)
	- Input/Output — communicates with outside world
- `Fetch → Decode → Execute → (repeat)`
- *Note*: Sequential execution: control unit fetches one instruction at a time, decodes, then executes before moving to the next.
- **Fetch-Decode-Execute Cycle — Detail:**
	- Fetch — Control unit reads instruction from memory address in Program Counter (PC); PC increments
	- Decode — Instruction Register (IR) holds instruction; control unit interprets opcode and operands
	- Execute — ALU or I/O unit performs the required operation; results written to register or memory
	- Writeback — (modern CPUs) result written back to register file; pipeline advances

## Computer Components

**Key insight:** ==A computer system === hardware + software + data working together

- **Hardware Categories:**
	- CPU — control unit + ALU + registers
	- Memory — RAM (volatile) + ROM (non-volatile) + Cache
	- Input devices — keyboard, mouse, scanner, microphone, camera
	- Output devices — monitor, printer, speakers
	- Storage — HDD, SSD, optical
- **Software Categories:**
	- System software — OS, device drivers, utilities
	- Application software — word processors, browsers, games
	- Programming tools — compilers, assemblers, debuggers
- **Memory Hierarchy (fastest → slowest):**
	- Registers — inside CPU; sub-nanosecond; bytes capacity
	- Cache (L1/L2/L3) — on-chip SRAM; nanoseconds; KB–MB range
	- RAM (main memory) — DRAM; tens of nanoseconds; GB range
	- SSD/NVMe — flash; microseconds; TB range
	- HDD — magnetic spinning disk; milliseconds; multiple TB
	- Optical/Tape — archival; seconds; near-unlimited
- **Component Reference:**
	- **Component**: CPU | **Example**: Intel Core i9 | **Role**: Executes instructions
	- **Component**: RAM | **Example**: 16 GB DDR5 | **Role**: Active program storage
	- **Component**: ROM/BIOS | **Example**: UEFI chip | **Role**: Boot firmware
	- **Component**: HDD/SSD | **Example**: 1 TB NVMe | **Role**: Permanent storage
	- **Component**: GPU | **Example**: NVIDIA RTX | **Role**: Graphics processing

## History: Four Generations

**Key insight:** ==Computer hardware evolved through== four distinct generations defined by the dominant technology

- **Generation 1 — Vacuum Tubes (1940s–1950s):**
	- ENIAC (1945): 18,000 vacuum tubes, 30 tons, 1,800 sq ft, 5,000 additions/sec
	- UNIVAC I (1951): first commercial computer
	- Programs stored on punched cards/tape
	- Unreliable: tubes burned out frequently; needed air conditioning
- **Generation 2 — Transistors (1950s–1960s):**
	- Transistor invented 1947 (Bell Labs); replaced vacuum tubes
	- Smaller, faster, cheaper, more reliable, less power
	- Magnetic core memory; high-level languages (FORTRAN, COBOL)
- **Generation 3 — Integrated Circuits (1960s–1970s):**
	- Multiple transistors on one silicon chip
	- IBM System/360 (1964): family of compatible computers
	- Time-sharing operating systems; minicomputers emerge
- **Generation 4 — Microprocessors (1970s–present):**
	- Entire CPU on a single chip
	- Intel 4004 (1971): first commercial microprocessor
	- Personal computers (Apple II 1977, IBM PC 1981)
	- VLSI → billions of transistors on one chip today
	- Multi-core CPUs, GPUs, mobile SoCs — all descendants of Gen 4
	- Internet era (1990s), smartphones (2007+), cloud computing (2010s)
- **Timeline at a Glance:**
	- **Era**: 1940s–50s | **Technology**: Vacuum tubes | **Key Machine**: ENIAC, UNIVAC | **Speed**: Thousands ops/sec
	- **Era**: 1950s–60s | **Technology**: Transistors | **Key Machine**: IBM 7090 | **Speed**: Millions ops/sec
	- **Era**: 1960s–70s | **Technology**: ICs | **Key Machine**: IBM System/360 | **Speed**: Tens of millions/sec
	- **Era**: 1970s–now | **Technology**: Microprocessors | **Key Machine**: Intel x86, ARM | **Speed**: Billions ops/sec
- *Note*: Moore's Law Gordon Moore, 1965: transistor count doubles ~every 2 years. Held roughly true for 50 years; now slowing as we approach physical limits.

## CS as a Discipline

**Key insight:** ==Computer Science = the== study of algorithms, data, and the machines that process them

- **ACM Classification of CS Areas:**
	- Algorithms and data structures — efficiency of computation
	- Programming languages — design, implementation, paradigms
	- Computer architecture — hardware organization
	- Operating systems & networking — resource management
	- Software engineering — building reliable large systems
	- Databases & information retrieval — storing and querying data
	- Artificial intelligence — intelligent behavior in machines
	- Human-computer interaction — usability and interfaces
	- Computational science — simulation and modeling
	- Theory of computation — what is and isn't computable
- **Why Study CS Broadly?:**
	- CS overlaps with every other field: biology, physics, economics, arts
	- Computational thinking is a universal problem-solving skill
	- Understanding the whole discipline prevents narrow "tunnel vision" engineering
	- Emerging fields (AI, quantum computing, bioinformatics) draw from all CS areas
- *Note*: About This Textbook (FCS) This textbook covers ALL of these areas at an introductory level — designed as a CS0 survey course giving a complete bird's-eye view of the discipline.

## Book Outline — Road Map

- **Part I — Computer Hardware (CH01–CH05):**
	- Organization, number systems, data storage, operations
- **Part II — Connectivity (CH06–CH07):**
	- Networks, internet, operating systems
- **Part III — Algorithms & Programming (CH08–CH10):**
	- Constructs, languages, software engineering
- **Part IV — Data Management (CH11–CH14):**
	- Structures, ADTs, files, databases
- **Part V — Advanced Topics (CH15–CH20):**
	- Compression, security, theory, AI, social media, ethics
- **Connections to Later Chapters:**
	- CH02 — Number systems (binary, octal, hex) underpin everything in CH03–CH05
	- CH04 — Operations on bits directly implement the ALU described here
	- CH05 — Computer organization expands the Von Neumann model in depth
	- CH09 — Programming languages build on the algorithm concept introduced here
	- CH18 — Theory of computation revisits Turing machines and decidability formally
- **Key Themes Across All Chapters:**
	- Abstraction — hiding complexity behind clean interfaces at every layer
	- Representation — how data is encoded (binary, ASCII, RGB, floating-point)
	- Efficiency — time and space complexity; doing more with less
	- Correctness — proving or testing that a system behaves as specified
	- Trade-offs — speed vs. memory, simplicity vs. power, security vs. usability
	- Layering — hardware → firmware → OS → application; each layer depends on the one below
	- Universality — the same hardware runs any software; Turing's insight made real
- *Note*: Chapter Structure Each chapter ends with: recommended reading, key terms, summary, and practice problems with solutions on the book website.

## Key Terms — Chapter 1 Glossary

	- **Term**: Computer | **Definition**: Programmable electronic device that processes data according to stored instructions
	- **Term**: Program | **Definition**: Finite set of instructions directing a computer to perform a specific task
	- **Term**: Hardware | **Definition**: Physical components of a computer system (tangible)
	- **Term**: Software | **Definition**: Programs and data that run on hardware (intangible)
	- **Term**: Data | **Definition**: Raw facts that a program processes to produce information
	- **Term**: Algorithm | **Definition**: Step-by-step procedure for solving a problem in finite time
	- **Term**: Turing machine | **Definition**: Abstract mathematical model defining what is computable
	- **Term**: Von Neumann model | **Definition**: Architecture storing programs and data in the same memory
	- **Term**: ALU | **Definition**: Arithmetic Logic Unit — performs integer arithmetic and logical operations
	- **Term**: Control Unit | **Definition**: Fetches, decodes, and controls execution of instructions
	- **Term**: Stored-program | **Definition**: Concept of keeping both programs and data in main memory
	- **Term**: Transistor | **Definition**: Semiconductor device that replaced vacuum tubes; basis of modern ICs
	- **Term**: Integrated Circuit | **Definition**: Multiple electronic components fabricated on a single silicon chip
	- **Term**: Microprocessor | **Definition**: Complete CPU on a single integrated circuit chip
	- **Term**: Cache | **Definition**: Small, fast SRAM memory between the CPU and main RAM that stores frequently used data
	- **Term**: Operating System | **Definition**: System software that manages hardware resources and provides services to application programs
	- **Term**: Compiler | **Definition**: Program that translates high-level source code into machine-executable object code
	- **Term**: Binary | **Definition**: Base-2 number system using only 0 and 1; the native language of digital computers
	- **Term**: Bit | **Definition**: Binary digit — the smallest unit of data in a computer; has a value of 0 or 1
	- **Term**: Byte | **Definition**: Group of 8 bits; the basic addressable unit of memory in most computer architectures
	- **Term**: Moore's Law | **Definition**: Observation that transistor count on a chip doubles approximately every two years
	- **Term**: Church-Turing Thesis | **Definition**: Hypothesis that any effectively computable function can be computed by a Turing machine
	- **Term**: Halting Problem | **Definition**: Undecidable problem: no algorithm can determine in general whether a program will halt or run forever
- **Chapter 1 — Quick Review Checklist:**
	- Can you name all four components of a Turing machine and explain each?
	- Can you explain the stored-program concept and why it was revolutionary?
	- Can you list the four Von Neumann components and describe the fetch-decode-execute cycle?
	- Can you name one key development from each of the four computer generations?
	- Can you distinguish system software from application software with examples?
	- Can you list at least five ACM areas of computer science?
	- Can you state Moore's Law and explain why it is significant?
	- Can you explain the Von Neumann bottleneck and how Harvard architecture addresses it?
	- Can you define: algorithm, data, program, hardware, software, transistor, VLSI?
	- Can you describe the Church-Turing Thesis and the Halting Problem in plain language?
	- Can you draw (or describe) the Von Neumann architecture with all four components and their connections?
	- Can you place ENIAC, UNIVAC, IBM System/360, and Intel 4004 in the correct generation?

---

# Chapter II: Number Systems

## Positional Systems Overview

**Key insight:** ==In a positional system,== the value of each digit depends on both the digit and its position

- **General Formula:**
- `(dn dn−1 ... d1 d0)b = dn×bn + ... + d1×b1 + d0×b0`
- **Worked Formula Example: (3A2)₁₆:**
	- d2=3, d1=A(10), d0=2, base=16
	- 3×16² + 10×16¹ + 2×16⁰
	- = 3×256 + 10×16 + 2×1 = 768 + 160 + 2 = 930₁₀
- **Four Systems Used in Computing:**
	- **System**: Decimal | **Base**: 10 | **Digits**: 0–9 | **Notes**: Human communication
	- **System**: Binary | **Base**: 2 | **Digits**: 0, 1 | **Notes**: Computer hardware (voltage levels)
	- **System**: Octal | **Base**: 8 | **Digits**: 0–7 | **Notes**: Groups of 3 binary bits
	- **System**: Hexadecimal | **Base**: 16 | **Digits**: 0–9, A–F | **Notes**: Groups of 4 binary bits
- **Number Ranges by Bit Width:**
	- **Bits**: 4 | **Unsigned range**: 0 – 15 | **Signed range (two's complement)**: −8 to 7
	- **Bits**: 8 | **Unsigned range**: 0 – 255 | **Signed range (two's complement)**: −128 to 127
	- **Bits**: 16 | **Unsigned range**: 0 – 65,535 | **Signed range (two's complement)**: −32,768 to 32,767
	- **Bits**: 32 | **Unsigned range**: 0 – 4,294,967,295 | **Signed range (two's complement)**: −2,147,483,648 to 2,147,483,647
	- **Bits**: 64 | **Unsigned range**: 0 – 1.8×10¹⁹ | **Signed range (two's complement)**: −9.2×10¹⁸ to 9.2×10¹⁸

## Binary System (Base 2)

**Key insight:** ==Binary is the native== language of computers — each bit represents a circuit that is OFF (0) or ON (1)

- **Place Values (right to left):**
	- **Bit position**: 2n | **7**: 128 | **6**: 64 | **5**: 32 | **4**: 16 | **3**: 8 | **2**: 4 | **1**: 2 | **0**: 1
- **Binary → Decimal (sum of bit × place value):**
	- (1011)₂ = 1×8 + 0×4 + 1×2 + 1×1 = 8+0+2+1 = 11₁₀
	- (11001101)₂ = 128+64+8+4+1 = 205₁₀
- **Decimal → Binary (repeated division by 2):**
	- Divide decimal number by 2
	- Record remainder (0 or 1)
	- Repeat with quotient
	- Read remainders bottom to top = binary result
- **Example: 25₁₀ → Binary:**
- *Note*: Read up → 11001₂ Verify: 16+8+1 = 25

## Hexadecimal System (Base 16)

**Key insight:** ==One hex digit === exactly 4 binary bits — the most compact human-readable form of binary

- **Digit Map (all 16 values):**
	- **Hex**: 0 | **Binary**: 0000 | **Decimal**: 0
	- **Hex**: 1 | **Binary**: 0001 | **Decimal**: 1
	- **Hex**: 2 | **Binary**: 0010 | **Decimal**: 2
	- **Hex**: 3 | **Binary**: 0011 | **Decimal**: 3
	- **Hex**: 4 | **Binary**: 0100 | **Decimal**: 4
	- **Hex**: 5 | **Binary**: 0101 | **Decimal**: 5
	- **Hex**: 6 | **Binary**: 0110 | **Decimal**: 6
	- **Hex**: 7 | **Binary**: 0111 | **Decimal**: 7
	- **Hex**: 8 | **Binary**: 1000 | **Decimal**: 8
	- **Hex**: 9 | **Binary**: 1001 | **Decimal**: 9
	- **Hex**: A | **Binary**: 1010 | **Decimal**: 10
	- **Hex**: B | **Binary**: 1011 | **Decimal**: 11
	- **Hex**: C | **Binary**: 1100 | **Decimal**: 12
	- **Hex**: D | **Binary**: 1101 | **Decimal**: 13
	- **Hex**: E | **Binary**: 1110 | **Decimal**: 14
	- **Hex**: F | **Binary**: 1111 | **Decimal**: 15
- **Conversions:**
	- Hex → Binary: (2AF)₁₆ → 0010 1010 1111₂
	- Binary → Hex: 101001111₂ → 0001 0100 1111 → 14F₁₆
	- Hex → Decimal: (2AF)₁₆ = 2×256 + 10×16 + 15×1 = 512+160+15 = 687₁₀
- *Note*: Real-World Use Hex is used everywhere: memory addresses (0x7FFE4000), color codes (#FF5733), machine code dumps, IPv6 (2001:0db8::1), file magic numbers

## Octal System (Base 8)

**Key insight:** ==One octal digit === exactly 3 binary bits

- **Octal → Binary (replace each digit with 3-bit group):**
	- (247)₈ → 010 100 111₂ = 010100111₂
- **Binary → Octal (group bits in 3s from right):**
	- 10111₂ → 010 111 → (27)₈
- **Octal → Decimal:**
	- (247)₈ = 2×64 + 4×8 + 7×1 = 128+32+7 = 167₁₀
- **Decimal → Octal (repeated division by 8):**
- *Note*: 167₁₀ → 167÷8=20 r7, 20÷8=2 r4, 2÷8=0 r2 → (247)₈
- **Extended Examples:**
	- (755)₈ = 111 101 101₂ (chmod rwxr-xr-x)
	- (644)₈ = 110 100 100₂ (chmod rw-r--r--)
	- (17)₈ = 001 111₂ = 15₁₀

## Conversion Methods

	- **From → To**: Binary → Decimal | **Method**: Sum: each bit × 2position
	- **From → To**: Decimal → Binary | **Method**: Divide by 2 repeatedly; read remainders RTL
	- **From → To**: Binary → Hex | **Method**: Group 4 bits from right; convert each group
	- **From → To**: Hex → Binary | **Method**: Expand each hex digit to exactly 4 bits
	- **From → To**: Binary → Octal | **Method**: Group 3 bits from right; convert each group
	- **From → To**: Octal → Binary | **Method**: Expand each octal digit to exactly 3 bits
	- **From → To**: Decimal → Hex | **Method**: Divide by 16 repeatedly; read remainders RTL
	- **From → To**: Hex → Decimal | **Method**: Multiply each digit by 16position; sum
	- **From → To**: Octal → Decimal | **Method**: Multiply each digit by 8position; sum
	- **From → To**: Decimal → Octal | **Method**: Divide by 8 repeatedly; read remainders RTL
- *Note*: Fastest Path Binary ↔ Hex (group 4), Binary ↔ Octal (group 3). Go through binary as an intermediate when converting between hex and octal.
- **Step-by-Step Example: Decimal 255 → All Bases:**
	- 255₁₀ → Binary: 255÷2=127 r1, 127÷2=63 r1, 63÷2=31 r1, 31÷2=15 r1, 15÷2=7 r1, 7÷2=3 r1, 3÷2=1 r1, 1÷2=0 r1 → 11111111₂
	- 11111111₂ → Hex: group 4: 1111 1111 → FF → FF₁₆
	- 11111111₂ → Octal: group 3: 011 111 111 → 377₈
	- Verify Hex: F×16 + F×1 = 240+15 = 255
	- Verify Octal: 3×64 + 7×8 + 7×1 = 192+56+7 = 255

## Fractional Conversions

**Key insight:** ==Fractional parts use negative== powers of the base

- **Binary Fractions:**
- `0.b₋₁b₋₂b₋₃ = b₋₁×2⁻¹ + b₋₂×2⁻² + b₋₃×2⁻³`
	- (0.101)₂ = 1×0.5 + 0×0.25 + 1×0.125 = 0.625₁₀
- **Decimal → Binary Fraction (repeated multiplication by 2):**
	- Multiply by 2
	- Integer part = next binary digit
	- Repeat with fractional part
	- Stop when fraction = 0 or desired precision reached
- **Example: 0.625₁₀ → Binary:**
- **Example: 0.1₁₀ → Binary (non-terminating):**
	- ×2=0.2 → 0, ×2=0.4 → 0, ×2=0.8 → 0, ×2=1.6 → 1
	- ×2=1.2 → 1, ×2=0.4 → 0, ×2=0.8 → 0, ×2=1.6 → 1 …
	- 0.1₁₀ = 0.0001100110011…₂ (pattern repeats forever)
- *Note*: Floating-Point Warning Many decimal fractions are non-terminating in binary — 0.1₁₀ = 0.000110011...₂ (repeating). This is why floating-point arithmetic has rounding errors (e.g., 0.1+0.2≠0.3 in most languages).

## Binary Arithmetic


## Non-Positional Systems

**Key insight:** ==In non-positional systems, symbol== value is fixed regardless of position

- **Roman Numerals:**
	- Additive: III=3, VIII=8, LXX=70
	- Subtractive (smaller before larger): IV=4, IX=9, XL=40, CM=900
	- MCMXCIX = 1000+(1000−100)+(100−10)+(10−1) = 1999
- **Problems:**
	- No zero symbol
	- Limited range
	- Arithmetic is extremely difficult
- *Note*: Why Binary Won Non-positional systems are impractical for computing — imagine multiplying XLVII × XXXIII. Positional binary won because electronics naturally implement two states.

## Powers of 2 — Quick Reference

	- **n**: 0 | **2ⁿ**: 1 | **Common Name / Use**: — | **n**: 16 | **2ⁿ**: 65,536 | **Common Name / Use**: 16-bit range
	- **n**: 1 | **2ⁿ**: 2 | **Common Name / Use**: — | **n**: 20 | **2ⁿ**: 1,048,576 | **Common Name / Use**: 1 MiB
	- **n**: 2 | **2ⁿ**: 4 | **Common Name / Use**: — | **n**: 24 | **2ⁿ**: 16,777,216 | **Common Name / Use**: 24-bit color range
	- **n**: 3 | **2ⁿ**: 8 | **Common Name / Use**: 1 byte = 8 bits | **n**: 30 | **2ⁿ**: 1,073,741,824 | **Common Name / Use**: 1 GiB
	- **n**: 4 | **2ⁿ**: 16 | **Common Name / Use**: 1 hex digit | **n**: 31 | **2ⁿ**: 2,147,483,648 | **Common Name / Use**: Max positive 32-bit signed
	- **n**: 7 | **2ⁿ**: 128 | **Common Name / Use**: Max positive 8-bit signed | **n**: 32 | **2ⁿ**: 4,294,967,296 | **Common Name / Use**: IPv4 address space
	- **n**: 8 | **2ⁿ**: 256 | **Common Name / Use**: 1 byte values (0–255) | **n**: 40 | **2ⁿ**: 1,099,511,627,776 | **Common Name / Use**: 1 TiB
	- **n**: 10 | **2ⁿ**: 1,024 | **Common Name / Use**: 1 KiB | **n**: 64 | **2ⁿ**: ~1.8 × 10¹⁹ | **Common Name / Use**: 64-bit address space
	- **n**: 15 | **2ⁿ**: 32,768 | **Common Name / Use**: Max positive 16-bit signed

---

# Chapter III: Data Storage

## Data Types Overview

**Key insight:** ==All computer data== - numbers, text, images, audio, video — is stored as patterns of 0s and 1s

	- 01000001 = 65 (unsigned integer)
	- 01000001 = 'A' (ASCII)
	- 01000001 = something else (float component)
	- **Data Type**: Integer | **Storage Method**: Binary (2's complement) | **Format Examples**: 42, -7, 0
	- **Data Type**: Real / Float | **Storage Method**: IEEE 754 | **Format Examples**: 3.14, -0.001, 6.022e23
	- **Data Type**: Text | **Storage Method**: Unicode code points (UTF-8) | **Format Examples**: 'A'=65, ''=U+4E2D
	- **Data Type**: Audio | **Storage Method**: PCM amplitude samples | **Format Examples**: WAV, FLAC, MP3
	- **Data Type**: Image | **Storage Method**: Pixel color values (RGB) | **Format Examples**: BMP, PNG, JPEG
	- **Data Type**: Video | **Storage Method**: Frames + audio + metadata | **Format Examples**: MP4, AVI, MKV
- *Note*: The computer doesn't know what a bit pattern "means" — only the program's data type declarations give meaning to the raw bits stored in memory.

## Integers — Unsigned

**Key insight:** ==Unsigned integers use ALL== bits for magnitude — no sign representation

	- **Bits**: 8 | **Min**: 0 | **Max**: 255 | **Common Use**: Byte, ASCII, pixel channel
	- **Bits**: 16 | **Min**: 0 | **Max**: 65,535 | **Common Use**: Port numbers, small counters
	- **Bits**: 32 | **Min**: 0 | **Max**: 4,294,967,295 | **Common Use**: IPv4 address, file sizes
	- **Bits**: 64 | **Min**: 0 | **Max**: ~1.8 × 10¹⁹ | **Common Use**: Large file sizes, timestamps
- `n-bit unsigned range: [0, 2ⁿ − 1]`
- **Overflow behaviour:**
	- Adding 1 to max wraps back to 0
	- 8-bit: 255 + 1 = 0 (wraps around)
- *Note*: Overflow is a common source of bugs and security vulnerabilities — if a program expects positive values and wraps to 0, logic errors can occur.

## Integers — Signed

**Key insight:** ==Two's complement is the== universal standard for signed integers in modern hardware

- **Sign-Magnitude (older / simpler):**
	- MSB = sign bit: 0 = positive, 1 = negative
	- +25 = 00011001 | −25 = 10011001 (8-bit)
	- Problem: TWO zeros (+0 = 00000000, −0 = 10000000)
	- Problem: Addition requires checking signs separately
- **Two's Complement (modern standard):**
	- −N = flip all bits of N, then add 1
	- Example −25 in 8-bit: +25 = 00011001 → flip = 11100110 → +1 = 11100111
	- Only ONE zero representation (00000000)
	- Addition and subtraction use the SAME hardware circuit
	- **Bits**: 8-bit | **Two's Complement Range**: −128 to +127
	- **Bits**: 16-bit | **Two's Complement Range**: −32,768 to +32,767
	- **Bits**: 32-bit | **Two's Complement Range**: −2,147,483,648 to +2,147,483,647
	- **Bits**: 64-bit | **Two's Complement Range**: −9,223,372,036,854,775,808 to +9,223,372,036,854,775,807
- `-N = ~N + 1 (bitwise NOT then add 1)`

## IEEE 754 Floating-Point

**Key insight:** ==IEEE 754 is the== universal standard for storing real numbers — supported by all modern CPUs

- **32-bit Single Precision layout:**
	- [sign 1 bit][exponent 8 bits][mantissa 23 bits]
	- Sign: 0 = positive, 1 = negative
	- Biased exponent: stored value = true exponent + 127 (bias)
	- Mantissa: fractional part after the implicit leading 1
- `Value = (−1)^sign × 1.mantissa × 2^(exponent − 127)`
- *Note*: 64-bit Double Precision: [sign 1][exponent 11][mantissa 52], bias = 1023
	- **Type**: Single (float) | **Bits**: 32 | **Exp**: 8 bits | **Mantissa**: 23 bits | **Approx Range**: ±3.4×10³⁸ | **Precision**: ~7 decimal digits
	- **Type**: Double | **Bits**: 64 | **Exp**: 11 bits | **Mantissa**: 52 bits | **Approx Range**: ±1.8×10³⁰⁸ | **Precision**: ~15 decimal digits
- **Special Values:**
	- +Inf: exp=11111111, mant=0
	- −Inf: exp=11111111, mant=0, sign=1
	- NaN: exp=11111111, mant≠0
	- ±0: exp=00000000, mant=0
- **Encoding Example: +6.75₁₀:**
	- 6.75 = 110.11₂ = 1.1011 × 2²
	- Sign = 0
	- Exponent = 2 + 127 = 129 = 10000001₂
	- Mantissa = 10110000000000000000000
	- Final: 0 10000001 10110000000000000000000
- **Converting Decimal Fraction → Binary:**
	- Multiply fraction by 2 repeatedly; integer part of each result is the next bit
	- 0.625 × 2 = 1.25 → bit=1; 0.25 × 2 = 0.5 → bit=0; 0.5 × 2 = 1.0 → bit=1
	- 0.625₁₀ = 0.101₂ (terminates) | 0.1₁₀ never terminates in binary!
- **Common Floating-Point Gotchas:**
	- Loss of significance: subtracting nearly-equal numbers loses precision
	- Catastrophic cancellation: (1 + ε) − 1 ≠ ε when ε is very small
	- Rounding modes: round-to-nearest (default), round-up, round-down, round-to-zero
	- Denormal numbers: very small values near zero with reduced precision

## Text — ASCII & Unicode

**Key insight:** ==Text is stored as== numeric code points — each character maps to a unique integer

- **ASCII (7-bit, 128 characters):**
	- 0–31: control characters (NUL, TAB, LF, CR, ESC…)
	- 32–126: printable (space, A–Z, a–z, 0–9, punctuation)
	- **Char**: Space | **Dec**: 32 | **Char**: '0' | **Dec**: 48 | **Char**: '9' | **Dec**: 57
	- **Char**: 'A' | **Dec**: 65 | **Char**: 'Z' | **Dec**: 90 | **Char**: 'a' | **Dec**: 97
	- **Char**: 'z' | **Dec**: 122 | **Char**: —
- **Unicode — all human writing systems (150,000+ chars):**
	- Range: U+0000 to U+10FFFF
	- U+0041 = 'A' | U+4E2D = '' | U+1F600 = ''
- **UTF-8 encoding (most common — web, Linux, modern software):**
	- 1 byte: U+0000–U+007F (ASCII-compatible!)
	- 2 bytes: U+0080–U+07FF (Latin, Greek, Arabic, Hebrew…)
	- 3 bytes: U+0800–U+FFFF (CJK, most symbols)
	- 4 bytes: U+10000–U+10FFFF (emoji, rare scripts)
- **Other Encodings:**
	- UTF-16: 2 or 4 bytes; used in Windows internals, Java, JavaScript
	- UTF-32: fixed 4 bytes; simple indexing but 4× larger than UTF-8
- **String Storage in Memory:**
	- C strings: null-terminated — last byte is 0x00 (NUL)
	- Pascal / Java strings: length-prefixed — first bytes store character count
	- Python 3: internally uses Latin-1, UCS-2, or UCS-4 depending on contents
	- Byte Order Mark (BOM): optional prefix indicating UTF-16/32 endianness
- **Encoding Pitfalls:**
	- Mojibake: garbled text from reading with wrong encoding (e.g., UTF-8 as Latin-1)
	- Always specify encoding explicitly — never rely on OS default
	- HTTP Content-Type: text/html; charset=UTF-8 declares encoding

## Audio Storage

**Key insight:** ==Audio is digitized by== sampling the analog waveform at regular intervals

- **Analog-to-Digital Conversion (ADC):**
	- Sample: measure amplitude at regular time intervals
	- Quantize: round to nearest discrete level
	- Encode: store as binary number
- **Sampling Rate (Hz):**
	- CD quality: 44,100 Hz (captures up to 22 kHz — Nyquist: must be 2× max freq)
	- DVD / Studio: 48,000–96,000 Hz
	- Telephone: 8,000 Hz
- **Bit Depth (bits per sample — resolution):**
	- 8-bit: 256 levels (low quality)
	- 16-bit: 65,536 levels (CD quality)
	- 24-bit: 16.7 million levels (professional)
- `Uncompressed size = sample_rate × bit_depth × channels × duration / 8 (bytes) Example: 3-min stereo CD = 44100 × 16 × 2 × 180 / 8 ≈ 31 MB`
- **Common Audio Formats:**
	- WAV / AIFF — uncompressed PCM (lossless, large)
	- FLAC — lossless compression (~50–60% smaller)
	- MP3 / AAC / OGG — lossy compression (90%+ smaller)
- **Nyquist–Shannon Sampling Theorem:**
	- To accurately reproduce a frequency f, sample at ≥ 2f (Nyquist rate)
	- Human hearing: ~20 Hz – 20 kHz → CD uses 44,100 Hz (> 2 × 20,000)
	- Sampling below Nyquist causes aliasing — false low-frequency artefacts
- **Channels:**
	- Mono (1 ch) — telephone, podcasts
	- Stereo (2 ch) — CD, streaming music
	- Surround 5.1 (6 ch) — DVD, Blu-ray
	- Surround 7.1 (8 ch) — high-end home theatre

## 3.7 Images & Video Storage


## Storage Units & Prefixes

	- **Unit**: Bit | **Symbol**: b | **Bytes (SI)**: 1/8 | **Binary Equivalent**: —
	- **Unit**: Byte | **Symbol**: B | **Bytes (SI)**: 1 | **Binary Equivalent**: 8 bits
	- **Unit**: Kilobyte | **Symbol**: KB | **Bytes (SI)**: 1,000 | **Binary Equivalent**: Kibibyte (KiB) = 1,024 B
	- **Unit**: Megabyte | **Symbol**: MB | **Bytes (SI)**: 1,000,000 | **Binary Equivalent**: Mebibyte (MiB) = 1,048,576 B
	- **Unit**: Gigabyte | **Symbol**: GB | **Bytes (SI)**: 10⁹ | **Binary Equivalent**: Gibibyte (GiB) = 2³⁰ B
	- **Unit**: Terabyte | **Symbol**: TB | **Bytes (SI)**: 10¹² | **Binary Equivalent**: Tebibyte (TiB) = 2⁴⁰ B
	- **Unit**: Petabyte | **Symbol**: PB | **Bytes (SI)**: 10¹⁵ | **Binary Equivalent**: Pebibyte (PiB) = 2⁵⁰ B
- *Note*: — The "Missing Space" Mystery Hard drive manufacturers use decimal (SI) prefixes — a "1 TB" drive = 10¹² bytes. Operating systems use binary — so it shows as ~931 GiB. This 7% "missing space" is just the unit difference.
- **Quick Size Reference:**
	- Plain text page ≈ 2–4 KB
	- MP3 song (4 min) ≈ 3–5 MB
	- HD photo (JPEG) ≈ 2–6 MB
	- Full HD movie (H.264) ≈ 1–4 GB
	- Blu-ray disc capacity ≈ 25–100 GB
- **SI vs Binary Prefix Quick-Convert:**
	- 1 GiB = 1,073,741,824 bytes ≈ 1.074 GB (decimal)
	- 1 TiB = 1,099,511,627,776 bytes ≈ 1.1 TB (decimal)
	- Ratio formula: (1024/1000)ⁿ where n = prefix order (1 for K, 2 for M, etc.)
	- IEC 80000-13 defines official KiB, MiB, GiB, TiB, PiB, EiB symbols

---

# Chapter IV: Operations on Data

## NOT, AND, OR

**Key insight:** ==Logic (Boolean) operations work== on individual bits — applied in parallel to all bits of a pattern (bitwise)

- **NOT — Unary Complement:**
- **NOT Truth Table:**
	- **Input**: 0 | **NOT Output**: 1
	- **Input**: 1 | **NOT Output**: 0
- **AND — Both Must Be 1:**
- *Note*: Result is 1 only when both input bits are 1; otherwise 0.
	- **A**: 0 | **B**: 0 | **A AND B**: 0
	- **A**: 0 | **B**: 1 | **A AND B**: 0
	- **A**: 1 | **B**: 0 | **A AND B**: 0
	- **A**: 1 | **B**: 1 | **A AND B**: 1
- **OR — Either Is 1:**
	- **A**: 0 | **B**: 0 | **A OR B**: 0
	- **A**: 0 | **B**: 1 | **A OR B**: 1
	- **A**: 1 | **B**: 0 | **A OR B**: 1
	- **A**: 1 | **B**: 1 | **A OR B**: 1

## XOR, NAND, NOR

**Key insight:** ==Result is 1 when== the two input bits differ; 0 when they are the same.

- **XOR — Exclusive OR:**
- *Note*: 10110011 XOR 00001111 = 10111100
	- **A**: 0 | **B**: 0 | **A XOR B**: 0
	- **A**: 0 | **B**: 1 | **A XOR B**: 1
	- **A**: 1 | **B**: 0 | **A XOR B**: 1
	- **A**: 1 | **B**: 1 | **A XOR B**: 0
- **Key XOR Properties:**
	- A XOR A = 0 — same value cancels
	- A XOR 0 = A — zero is identity
	- A XOR 1 = NOT A — ones flip the bit
	- Uses: toggle bits, parity checking, simple encryption, swap trick
- **NAND & NOR — Universal Gates:**
- **Full Combined Truth Table:**
	- **A**: 0 | **B**: 0 | **NOT A**: 1 | **AND**: 0 | **OR**: 0 | **XOR**: 0 | **NAND**: 1 | **NOR**: 1
	- **A**: 0 | **B**: 1 | **NOT A**: 1 | **AND**: 0 | **OR**: 1 | **XOR**: 1 | **NAND**: 1 | **NOR**: 0
	- **A**: 1 | **B**: 0 | **NOT A**: 0 | **AND**: 0 | **OR**: 1 | **XOR**: 1 | **NAND**: 1 | **NOR**: 0
	- **A**: 1 | **B**: 1 | **NOT A**: 0 | **AND**: 1 | **OR**: 1 | **XOR**: 0 | **NAND**: 0 | **NOR**: 0

## Shift Operations

**Key insight:** ==Shift operations move all== bits left or right — equivalent to fast multiplication/division by powers of 2

- **Shift Types:**
	- **Type**: Logical Left | **Symbol**: << | **Fill**: 0s on right | **Effect**: ×2ⁿ | **Use**: Unsigned multiply
	- **Type**: Logical Right | **Symbol**: >> | **Fill**: 0s on left | **Effect**: ÷2ⁿ unsigned | **Use**: Unsigned divide
	- **Type**: Arithmetic Left | **Symbol**: << | **Fill**: 0s on right | **Effect**: ×2ⁿ | **Use**: Signed multiply
	- **Type**: Arithmetic Right | **Symbol**: >> | **Fill**: Sign bit copies | **Effect**: ÷2ⁿ signed | **Use**: Signed divide
	- **Type**: Rotate Left | **Symbol**: <<< | **Fill**: MSB → LSB | **Effect**: Circular | **Use**: Cryptography
	- **Type**: Rotate Right | **Symbol**: >>> | **Fill**: LSB → MSB | **Effect**: Circular | **Use**: Cryptography
- **Example — Unsigned: 01110110 (118₁₀):**
- *Note*: Right shift 1: 00111011 (59₁₀ = 118÷2)
- **Example — Signed: 11110000 (−16 in 8-bit 2's complement):**
- `n << k = n × 2ᵏ`
- `n >> k = n ÷ 2ᵏ (arithmetic for signed, logical for unsigned)`

## Binary Addition & Overflow

**Key insight:** ==Binary addition follows four== rules; carries propagate left just like decimal

- **Four Addition Rules:**
	- **Operation**: 0 + 0 | **Sum**: 0 | **Carry Out**: 0
	- **Operation**: 0 + 1 | **Sum**: 1 | **Carry Out**: 0
	- **Operation**: 1 + 0 | **Sum**: 1 | **Carry Out**: 0
	- **Operation**: 1 + 1 | **Sum**: 0 | **Carry Out**: 1
	- **Operation**: 1 + 1 + 1 | **Sum**: 1 | **Carry Out**: 1
- **Full Adder Logic:**
- `Sum = A XOR B XOR Cᵢₙ`
- `Cₒᵤₜ = (A AND B) OR (Cᵢₙ AND (A XOR B))`
- **Multi-Byte Example:**
- *Note*: Carry pattern from right: 0,1,1,0,0,0,1,0
- **Overflow Detection:**

## Subtraction via Two's Complement

**Key insight:** ==Computers compute A −== B as A + (−B) using two's complement — no separate subtract circuit needed

- **Steps:**
	- Find two's complement of B: flip all bits, then add 1
	- Add A + (−B) using normal binary addition
	- Interpret MSB as sign (1 = negative in 2's complement)
- **Example: 54 − 77 in 8-bit:**
- *Note*: MSB=1 → negative. Decode: flip 11101001 = 00010110, +1 = 00010111 = 23 → result = −23
- **Example: 77 − 54 in 8-bit:**

## Multiplication & Division

**Key insight:** ==For each bit of== the multiplier (right to left): if bit = 1, add the appropriately shifted multiplicand.

- **Multiplication — Shift-and-Add Method:**
- **Example: 1011 (11) × 0101 (5):**
- *Note*: bit0=1: add 0001011 (shift 0) bit1=0: skip bit2=1: add 0101100 (shift 2) bit3=0: skip Sum: 0001011 + 0101100 = 0110111 = 55
- **Division:**
	- Hardware uses restoring or non-restoring algorithms
	- Division by 2ⁿ = arithmetic right shift n positions
- **Quick Powers-of-2 Shortcuts:**
- `n × 2ᵏ = n << k (left shift k bits)`
- `n ÷ 2ᵏ = n >> k (arithmetic right shift k bits)`
	- **Expression**: n × 2¹ | **Shift**: n << 1 | **Value (n=12)**: 24
	- **Expression**: n × 4 | **Shift**: n << 2 | **Value (n=12)**: 48
	- **Expression**: n × 8 | **Shift**: n << 3 | **Value (n=12)**: 96
	- **Expression**: n ÷ 2 | **Shift**: n >> 1 | **Value (n=12)**: 6
	- **Expression**: n ÷ 4 | **Shift**: n >> 2 | **Value (n=12)**: 3

## Bitwise Operations Summary & Practical Uses

- *Note*: Where Bit Manipulation Is Used Bit manipulation is used in embedded systems, graphics engines, cryptography, network packet parsing, and anywhere performance is critical.

---

# Chapter V: Computer Organization

## CPU: Central Processing Unit

**Key insight:** ==The CPU fetches instructions== from memory, decodes them, and executes them — the computer's brain

- **Three Core CPU Components:**
	- ALU (Arithmetic Logic Unit): integer arithmetic, bitwise logic, comparisons
	- Control Unit (CU): decodes opcodes, controls all component coordination
	- Registers: ultra-fast internal storage (no latency vs RAM's ~100 ns)
- **Key CPU Registers:**
	- **Register**: PC | **Full Name**: Program Counter | **Role**: Address of NEXT instruction
	- **Register**: IR | **Full Name**: Instruction Register | **Role**: Currently executing instruction
	- **Register**: MAR | **Full Name**: Memory Address Register | **Role**: Address for memory read/write
	- **Register**: MDR | **Full Name**: Memory Data Register | **Role**: Data buffer for memory operations
	- **Register**: SP | **Full Name**: Stack Pointer | **Role**: Top of call stack in memory
	- **Register**: FLAGS | **Full Name**: Status/Flag Register | **Role**: Condition codes: Zero, Carry, Negative, Overflow
- **General-Purpose Registers:**
	- Hold operands and intermediate results during computation
	- x86/x86-64: EAX–EDX, ESI, EDI (extended to RAX–RDX, RSI, RDI in 64-bit)
	- ARM: R0–R15 (32-bit) / X0–X30 (AArch64)

## Main Memory

**Key insight:** ==Main memory (RAM) stores== both programs and data currently being used — volatile, directly addressable by CPU

- **Memory as an Array:**
	- Each cell = 1 byte, with a unique numeric address
	- n address bits → 2n addressable locations
- `Address space = 2^(address_bus_width) bytes32-bit → 4 GB | 64-bit → 16 exabytes (theoretical)`
- **Memory Access Sequence:**
	- READ: CPU → address in MAR → memory puts data in MDR → CPU reads MDR
	- WRITE: CPU → address in MAR, data in MDR → memory stores it
- **Memory Hierarchy — Speed & Cost:**
	- **Level**: Registers | **Type**: SRAM | **Speed**: ~0.3 ns | **Volatile**: Yes | **Size**: Bytes
	- **Level**: L1 Cache | **Type**: SRAM | **Speed**: ~1 ns | **Volatile**: Yes | **Size**: 32–128 KB
	- **Level**: L2 Cache | **Type**: SRAM | **Speed**: ~4 ns | **Volatile**: Yes | **Size**: 256 KB–2 MB
	- **Level**: L3 Cache | **Type**: SRAM | **Speed**: ~10 ns | **Volatile**: Yes | **Size**: 4–64 MB
	- **Level**: Main RAM | **Type**: DRAM | **Speed**: ~100 ns | **Volatile**: Yes | **Size**: GBs
	- **Level**: SSD | **Type**: Flash | **Speed**: ~100 µs | **Volatile**: No | **Size**: TBs
	- **Level**: HDD | **Type**: Magnetic | **Speed**: ~10 ms | **Volatile**: No | **Size**: TBs
- *Note*: Locality Principle Cache works because of locality: programs tend to access the same data/instructions repeatedly (temporal locality) and access nearby addresses (spatial locality)

## I/O Subsystem

**Key insight:** ==I/O devices connect the== computer to the external world — all managed by specialized controllers

- **I/O Device Types:**
	- Input only: keyboard, mouse, scanner, microphone, camera
	- Output only: display/monitor, printer, speakers
	- Both: touchscreen, network card, USB drive, hard disk
- **I/O Controllers:**
	- Dedicated chips managing device communication; CPU never talks directly to device hardware
	- Controller handles: timing, buffering, protocol, error detection
- **Three I/O Methods:**
	- Programmed I/O (polling): CPU loops checking device status register — simple but CPU wastes 100% time waiting
	- Interrupt-driven I/O: device interrupts CPU when ready — CPU does other work; only interrupted when I/O needs attention
	- DMA (Direct Memory Access): dedicated controller transfers data directly RAM↔device — CPU only sets up transfer; DMA fires interrupt ONLY when complete; fastest; used for disks, network, GPU
- `Device ready → raise interrupt line → CPU saves state → jumps to ISR → returns`
	- **Method**: Polling | **CPU Involvement**: 100% busy-wait | **Suitable For**: Tiny/fast devices
	- **Method**: Interrupt | **CPU Involvement**: Minimal | **Suitable For**: Most devices
	- **Method**: DMA | **CPU Involvement**: Setup + completion only | **Suitable For**: Bulk data (disk, NIC)

## Subsystem Interconnection: Buses

**Key insight:** ==A bus is a== shared communication pathway — all attached components take turns using it

- **Three Bus Types:**
	- Data bus: carries actual data values; bidirectional; width = word size (8/16/32/64-bit)
	- Address bus: carries memory/device addresses; CPU→memory (unidirectional); width = address space
	- Control bus: read/write signal, clock, interrupt, reset, bus request/grant
- `Bus bandwidth = bus_width_bytes × bus_clock_frequency64-bit bus @ 100 MHz = 8B × 100M = 800 MB/s`
- **Bus Arbitration (multiple masters):**
	- Daisy chain: priority by physical position along the bus
	- Centralized: arbiter chip grants access to one requester at a time
	- Distributed: each device checks if bus is free (like CSMA/CD)
- **Modern High-Speed Alternatives:**
	- PCIe (PCI Express): point-to-point serial; lanes multiply bandwidth — PCIe 4.0 ×16 = 32 GB/s (GPUs, NVMe SSDs)
	- HyperTransport, Intel QPI/UPI: CPU-to-CPU and CPU-to-memory interconnects
- *Note*: Von Neumann Bottleneck A single shared bus between CPU and memory limits overall throughput. Modern computers use multiple separate buses and cache hierarchies to overcome this.

## Program Execution: Fetch-Decode-Execute

**Key insight:** ==The CPU endlessly repeats== the fetch-decode-execute cycle until a HALT instruction

- **Detailed Cycle Steps:**
	- FETCH: PC→MAR | memory[MAR]→MDR→IR | PC++ (points to next instruction)
	- DECODE: Control unit reads opcode in IR; identifies operation and operand addresses
	- EXECUTE: ALU performs operation OR memory read/write OR jump; flags updated
	- Handle interrupts (if pending) → GOTO step 1
- **Clock Cycles & CPI:**
	- Each step takes 1+ clock cycles
	- CPI (Cycles Per Instruction): RISC target = 1 CPI; complex CISC may take 10+
- **Pipelining:**
	- Execute multiple instructions simultaneously across different stages
	- 5-stage pipeline: IF → ID → EX → MEM → WB (Write Back)
	- Throughput: 1 instruction completed per cycle (ideally)
	- Hazards: data (dependency), control (branches), structural (resource conflict)
- `CPU Time = Instruction_Count × CPI × Clock_Period`

## CPU Architectures: RISC vs CISC

**Key insight:** ==RISC and CISC represent== two philosophies for ISA design — both dominate in different markets

	- **Feature**: Instructions | **CISC (x86/x86-64)**: Many complex | **RISC (ARM, MIPS, RISC-V)**: Few simple
	- **Feature**: Instr. length | **CISC (x86/x86-64)**: Variable (1–15 bytes) | **RISC (ARM, MIPS, RISC-V)**: Fixed (32-bit)
	- **Feature**: Memory access | **CISC (x86/x86-64)**: Memory-to-memory ops OK | **RISC (ARM, MIPS, RISC-V)**: Load/Store only
	- **Feature**: Register count | **CISC (x86/x86-64)**: 8–16 (x86-32) | **RISC (ARM, MIPS, RISC-V)**: 16–32+
	- **Feature**: Pipeline friendly | **CISC (x86/x86-64)**: Less (variable length) | **RISC (ARM, MIPS, RISC-V)**: Very (fixed length)
	- **Feature**: CPI | **CISC (x86/x86-64)**: Often > 1 | **RISC (ARM, MIPS, RISC-V)**: Target = 1
	- **Feature**: Code density | **CISC (x86/x86-64)**: Higher | **RISC (ARM, MIPS, RISC-V)**: Lower (more instructions)
	- **Feature**: Examples | **CISC (x86/x86-64)**: Intel x86, AMD64 | **RISC (ARM, MIPS, RISC-V)**: ARM, MIPS, RISC-V, PowerPC
	- **Feature**: Used in | **CISC (x86/x86-64)**: Desktop, servers, laptops | **RISC (ARM, MIPS, RISC-V)**: Mobile, embedded, Apple Silicon
- **Harvard vs Von Neumann:**
	- Von Neumann: same memory for code + data — general-purpose CPUs
	- Harvard: separate instruction and data memory — microcontrollers, DSPs; faster but less flexible
- *Note*: Apple Silicon Apple Silicon (M1/M2/M3) is ARM-based RISC — Apple proved RISC can outperform CISC in both performance and power efficiency in 2020.

## Forouzan's Simple Computer (Conceptual Model)

**Key insight:** ==A simple 16-instruction CPU== illustrates how all real processors work at their core


## Key Terms Quick Reference

	- **Term**: CPU | **Definition**: Central Processing Unit — fetches, decodes, executes instructions
	- **Term**: ALU | **Definition**: Arithmetic Logic Unit — performs all arithmetic and logical computation
	- **Term**: CU | **Definition**: Control Unit — decodes instructions and orchestrates execution of every component
	- **Term**: PC | **Definition**: Program Counter — holds address of the next instruction to fetch
	- **Term**: IR | **Definition**: Instruction Register — holds the current instruction being decoded and executed
	- **Term**: MAR | **Definition**: Memory Address Register — address supplied to memory for current read/write
	- **Term**: MDR | **Definition**: Memory Data Register — data buffer exchanged between CPU and memory
	- **Term**: Bus | **Definition**: Shared wires connecting CPU, memory, and I/O components; data/address/control buses
	- **Term**: ISA | **Definition**: Instruction Set Architecture — the programmer-visible interface to the processor
	- **Term**: Opcode | **Definition**: Operation code — binary encoding of the instruction type (e.g., ADD, LOAD, HALT)
	- **Term**: Operand | **Definition**: Data value or address that an instruction operates on
	- **Term**: CPI | **Definition**: Cycles Per Instruction — average clock cycles needed to complete one instruction
	- **Term**: DMA | **Definition**: Direct Memory Access — bulk I/O controller without CPU per-byte involvement
	- **Term**: Cache | **Definition**: Fast SRAM buffer between CPU and main DRAM — reduces average memory access time

## Addressing Modes

**Key insight:** ==An addressing mode specifies== how the operand of an instruction is located

	- **Mode**: Immediate | **Syntax Example**: ADD R1, #5 | **Effective Address / Value**: Operand = constant in instruction itself
	- **Mode**: Register | **Syntax Example**: ADD R1, R2 | **Effective Address / Value**: Operand = value in named register
	- **Mode**: Direct (Absolute) | **Syntax Example**: LOAD R1, 200 | **Effective Address / Value**: EA = address 200 in memory
	- **Mode**: Indirect | **Syntax Example**: LOAD R1, (200) | **Effective Address / Value**: EA = memory[200] (pointer dereference)
	- **Mode**: Register Indirect | **Syntax Example**: LOAD R1, (R2) | **Effective Address / Value**: EA = value in register R2
	- **Mode**: Indexed | **Syntax Example**: LOAD R1, 100(R2) | **Effective Address / Value**: EA = 100 + R2 (array access)
	- **Mode**: PC-Relative | **Syntax Example**: BRANCH +12 | **Effective Address / Value**: EA = PC + offset (position-independent code)
	- **Mode**: Stack | **Syntax Example**: PUSH / POP | **Effective Address / Value**: EA = SP; SP auto-increments/decrements
- *Note*: Design Trade-off More addressing modes → more expressive instructions (CISC) but a more complex decoder. RISC keeps only register + immediate + register-indirect for simplicity and speed.
- **Instruction Format (Forouzan Simple Computer):**
- `| 4-bit opcode | 4-bit Rx | 4-bit Ry | 4-bit Rz | (register format)| 4-bit opcode | 4-bit Rx | 8-bit address | (memory format)`

## CPU Performance & Benchmarking

**Key insight:** ==CPU performance depends on== clock speed, CPI, instruction count, and memory latency

- **Core Performance Equations:**
- `CPU Time = IC × CPI × (1 / Clock_Frequency)MIPS = Clock_Frequency / (CPI × 10⁶)`
- **Factors Affecting Performance:**
	- Clock frequency (GHz): cycles per second — higher = faster per cycle
	- CPI: lower is better; pipeline stalls raise effective CPI
	- Instruction count: compiler optimisations reduce IC
	- Memory wall: CPU much faster than DRAM — cache misses dominate latency
	- ILP (Instruction-Level Parallelism): out-of-order execution, superscalar
- **Amdahl's Law — Parallelism Limit:**
- `Speedup = 1 / ((1 − P) + P/N)P = parallel fraction, N = processors`
	- If 90% of code is parallelizable with 10 cores → max speedup = 1/(0.1 + 0.09) ≈ 5.3×
	- Serial portions ultimately limit scalability
- **Common Benchmarks:**
	- SPEC CPU: industry-standard integer and floating-point workloads
	- LINPACK: dense matrix solve — used for TOP500 supercomputer rankings
	- Geekbench: consumer multi-core/single-core performance

## Interrupts & Exception Handling

**Key insight:** ==Interrupts allow the CPU== to respond to asynchronous events without constant polling

- **Interrupt Categories:**
	- Hardware interrupt (IRQ): raised by external device (keyboard, NIC, timer)
	- Software interrupt / trap: deliberate INT n instruction — used for system calls
	- Exception / fault: triggered by CPU on illegal operation (divide-by-zero, page fault, illegal opcode)
	- Non-maskable interrupt (NMI): cannot be disabled — used for hardware failures / watchdogs
- **Interrupt Service Routine (ISR) Sequence:**
	- Device asserts interrupt line; CPU finishes current instruction
	- CPU pushes PC, FLAGS, and registers onto stack (context save)
	- CPU fetches ISR address from Interrupt Vector Table (IVT)
	- ISR runs: services the device, clears interrupt flag
	- CPU pops saved context (IRET); resumes interrupted program
- **Interrupt Priority & Nesting:**
	- Higher-priority interrupts can preempt lower-priority ISRs
	- Interrupt mask register lets OS selectively disable interrupt classes
	- Timer interrupt drives OS preemptive scheduling (typically every 1–10 ms)
- *Note*: System Calls via Software Interrupt On x86 Linux, int 0x80 (legacy) or syscall (x86-64) transfers control to the kernel — the OS services the request, then returns to user space.

## Virtual Memory & Memory Management

**Key insight:** ==Virtual memory gives each== process its own address space, larger than physical RAM

- **Key Concepts:**
	- Virtual address: address used by programs — translated by the MMU
	- Physical address: actual location in DRAM chips
	- MMU (Memory Management Unit): hardware that translates VA → PA using page tables
	- Page: fixed-size block (typically 4 KB) — unit of virtual memory mapping
	- Page fault: accessed page not in RAM → OS loads it from disk (swap)
	- TLB (Translation Lookaside Buffer): fast cache of recent VA→PA translations
- **Benefits of Virtual Memory:**
	- Process isolation — each process sees only its own address space
	- Memory overcommit — run programs larger than physical RAM
	- Simplified linking — every program starts at virtual address 0
	- Memory-mapped files — treat files as memory regions (mmap)
- `Effective Access Time = (TLB_hit_rate × TLB_time) + (TLB_miss_rate × (TLB_time + page_table_time))`

## Chapter 5 — Concept Map Summary

**Key insight:** ==All components work together==: CPU ↔ Memory ↔ I/O, connected by buses

- **Component Relationships:**
	- CPU ↔ Memory: via MAR/MDR registers over address + data buses
	- CPU ↔ I/O: via programmed I/O, interrupts, or DMA controller
	- Memory ↔ I/O: DMA bypasses CPU — transfers block data directly
	- Cache sits between CPU and RAM: transparent to programmer
- **Execution Flow of a Program:**
	- OS loads program from disk into RAM; sets PC to entry point
	- CPU begins fetch-decode-execute; cache fills from RAM on misses
	- I/O syscalls trigger interrupts; DMA handles bulk transfers
	- OS preempts via timer interrupt; saves context; schedules next process
	- HALT or exit syscall terminates; OS reclaims memory
- *Note*: Big Picture Computer organization bridges the gap between digital logic (gates, flip-flops) and systems software (OS, compilers). Understanding it is fundamental to writing efficient, correct software.

---

# Chapter VI: Computer Networks

## Network Categories

**Key insight:** ==A network is a== set of devices connected by communication links; categorised by geographic coverage

- **Coverage Areas:**
	- **Type**: LAN | **Coverage**: Room → campus (~1 km) | **Example**: Office Ethernet, Wi-Fi
	- **Type**: MAN | **Coverage**: City (~100 km) | **Example**: Cable TV network, WiMAX
	- **Type**: WAN | **Coverage**: Country / globe | **Example**: Internet backbone, MPLS
- **Physical Topology Types:**
	- Bus — all nodes share one backbone cable; simple, single point of failure on cable
	- Star — all nodes connect to central hub/switch; easy to manage, hub is single point of failure
	- Ring — each node connects to two neighbours forming a loop; token-passing; failure breaks ring
	- Mesh — every node connects to every other; highest redundancy, expensive; used in WANs
	- Hybrid — combination (e.g. star-bus, star-ring) used in most real deployments
- *Note*: Topology vs. Connection Type Topology describes physical layout. Connection can be point-to-point (dedicated link) or multipoint (shared link). Most modern LANs use star topology with switched point-to-point links.
- **LAN Technologies:**
	- Ethernet (IEEE 802.3) — dominant wired LAN standard; 10 Mbps → 100 Gbps
	- Wi-Fi (IEEE 802.11) — dominant wireless LAN; 802.11n/ac/ax
	- Token Ring (IEEE 802.5) — legacy; deterministic access via token

## OSI Reference Model — 7 Layers

**Key insight:** ==OSI = Open Systems== Interconnection; ISO standard for how network layers communicate via defined interfaces

	- **#**: 7 | **Layer**: Application | **Data Unit**: Message | **Key Functions / Protocols**: HTTP, FTP, SMTP, DNS, DHCP
	- **#**: 6 | **Layer**: Presentation | **Data Unit**: Message | **Key Functions / Protocols**: SSL/TLS, JPEG, ASCII, MIME
	- **#**: 5 | **Layer**: Session | **Data Unit**: Message | **Key Functions / Protocols**: NetBIOS, RPC, SQL
	- **#**: 4 | **Layer**: Transport | **Data Unit**: Segment | **Key Functions / Protocols**: TCP, UDP, SCTP
	- **#**: 3 | **Layer**: Network | **Data Unit**: Packet | **Key Functions / Protocols**: IP, ICMP, OSPF, BGP
	- **#**: 2 | **Layer**: Data Link | **Data Unit**: Frame | **Key Functions / Protocols**: Ethernet, Wi-Fi, PPP, ARP
	- **#**: 1 | **Layer**: Physical | **Data Unit**: Bit | **Key Functions / Protocols**: RS-232, DSL, IEEE 802.3
- *Note*: Mnemonic All People Seem To Need Data Processing (layers 7→1) or Please Do Not Throw Sausage Pizza Away (1→7).
- **Layer Interaction Rules:**
	- Each layer provides services to the layer above and uses services of the layer below
	- Peer layers communicate via protocols; adjacent layers communicate via interfaces
	- Encapsulation: each layer adds its own header (and sometimes trailer) as data travels down
	- Decapsulation: headers stripped as data travels up on the receiving side

## TCP/IP Protocol Suite — 5 Layers

**Key insight:** ==TCP/IP is the practical== protocol suite of the Internet; predates OSI and uses 5 (sometimes 4) layers

	- **Layer**: Application | **Responsibility**: User services, data representation, session management | **OSI Equiv.**: 5, 6, 7 | **Key Protocols**: HTTP, DNS, SMTP, FTP, DHCP, Telnet
	- **Layer**: Transport | **Responsibility**: Process-to-process delivery, ports, flow & error control | **OSI Equiv.**: 4 | **Key Protocols**: TCP, UDP, SCTP
	- **Layer**: Internet | **Responsibility**: Logical addressing, routing, fragmentation | **OSI Equiv.**: 3 | **Key Protocols**: IPv4, IPv6, ICMP, IGMP
	- **Layer**: Data Link | **Responsibility**: Framing, MAC addressing, media access | **OSI Equiv.**: 2 | **Key Protocols**: Ethernet, Wi-Fi, PPP
	- **Layer**: Physical | **Responsibility**: Bit encoding, transmission over physical medium | **OSI Equiv.**: 1 | **Key Protocols**: Cables, fiber, radio waves
- **TCP vs UDP:**
	- **Feature**: Connection | **TCP**: Connection-oriented (3-way handshake) | **UDP**: Connectionless
	- **Feature**: Reliability | **TCP**: Guaranteed delivery, ACKs, retransmit | **UDP**: Best-effort, no ACKs
	- **Feature**: Order | **TCP**: In-order delivery | **UDP**: No ordering guarantee
	- **Feature**: Overhead | **TCP**: High (20-byte header min) | **UDP**: Low (8-byte header)
	- **Feature**: Use Cases | **TCP**: HTTP, FTP, Email, SSH | **UDP**: DNS, VoIP, video stream, gaming
- *Note*: OSI vs TCP/IP OSI is a reference model (theoretical); TCP/IP is the implementation model (practical). The Internet runs on TCP/IP, not OSI.

## Internet Addressing — IPv4 & IPv6

**Key insight:** ==An IP address uniquely== identifies a device's interface on a network at the Internet (Network) layer

- **IPv4 — 32-bit Dotted-Decimal:**
- `Format: W.X.Y.Z (each octet 0–255) e.g. 192.168.1.10`
- **IPv4 Classful Addressing:**
	- **Class**: A | **Range (1st Octet)**: 1 – 126 | **Default Mask**: 255.0.0.0 /8 | **Purpose**: Large networks (16M hosts)
	- **Class**: B | **Range (1st Octet)**: 128 – 191 | **Default Mask**: 255.255.0.0 /16 | **Purpose**: Medium networks (65K hosts)
	- **Class**: C | **Range (1st Octet)**: 192 – 223 | **Default Mask**: 255.255.255.0 /24 | **Purpose**: Small networks (254 hosts)
	- **Class**: D | **Range (1st Octet)**: 224 – 239 | **Default Mask**: — | **Purpose**: Multicast
	- **Class**: E | **Range (1st Octet)**: 240 – 255 | **Default Mask**: — | **Purpose**: Reserved / Experimental
- **Subnet Masks & CIDR:**
	- Subnet mask — 32-bit value; 1s mark the network portion, 0s mark the host portion
	- CIDR notation — 192.168.10.0/24 means 24 network bits, 8 host bits
	- Network address — all host bits = 0 (e.g. 192.168.1.0)
	- Broadcast address — all host bits = 1 (e.g. 192.168.1.255)
	- Usable hosts per subnet = 2h − 2 (h = host bits)
- **Private Address Ranges (RFC 1918):**
- `10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16`
- **IPv6 — 128-bit Hexadecimal:**
- `Format: 8 groups of 4 hex digits separated by colons e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334`
	- Total space: 2128 ≈ 3.4 × 1038 addresses — virtually inexhaustible
	- Abbreviation rules: omit leading zeros; replace one consecutive all-zero group with ::
	- 2001:db8::1 is shorthand for 2001:0db8:0000:0000:0000:0000:0000:0001
	- No broadcast; uses anycast and multicast instead
	- Built-in IPsec support; simplified header improves routing efficiency
- *Note*: NAT & IPv4 Exhaustion NAT is used to share a single public IPv4 address across many private hosts. IPv6 eliminates the need for NAT.

## Network Devices — Layer by Layer

**Key insight:** ==Network devices connect nodes== and forward data; they operate at specific OSI layers, which determines their intelligence

	- **Device**: Repeater | **OSI Layer**: Layer 1 — Physical | **Addresses Used**: None | **Key Behaviour**: Regenerates signal; no filtering; extends cable segment length
	- **Device**: Hub | **OSI Layer**: Layer 1 — Physical | **Addresses Used**: None | **Key Behaviour**: Broadcasts to all ports; shared bandwidth; largely obsolete
	- **Device**: Bridge | **OSI Layer**: Layer 2 — Data Link | **Addresses Used**: MAC Address | **Key Behaviour**: Learns MAC table; forwards or filters frames; separates collision domains
	- **Device**: Switch | **OSI Layer**: Layer 2 — Data Link | **Addresses Used**: MAC Address | **Key Behaviour**: Full-duplex per port; dedicated bandwidth; replaces hub in modern LANs
	- **Device**: Router | **OSI Layer**: Layer 3 — Network | **Addresses Used**: IP Address | **Key Behaviour**: Maintains routing tables; separates broadcast domains; connects LANs to WAN/Internet
	- **Device**: Gateway | **OSI Layer**: Layer 4–7 — Transport to App | **Addresses Used**: IP + Port | **Key Behaviour**: Protocol conversion; e.g. email gateway, VoIP gateway, API gateway
- **Collision vs Broadcast Domains:**
	- Collision domain — segment where only one device can transmit at a time; broken by bridges/switches
	- Broadcast domain — area flooded by a broadcast frame; broken only by routers
	- Each switch port = its own collision domain; entire switch = one broadcast domain (unless VLANs used)
- *Note*: Layer-3 Switch A Layer-3 switch combines switching speed with routing capability — it can route between VLANs at wire speed, acting as both a switch and a router in enterprise networks.
- **Firewall:**

## Application Layer Protocols

**Key insight:** ==Application-layer protocols define the== rules for specific user-level services; identified by well-known port numbers

- **Web & File Transfer:**
	- **Protocol**: HTTP | **Port(s)**: 80 | **Transport**: TCP | **Purpose**: Web page retrieval; stateless GET/POST/PUT/DELETE
	- **Protocol**: HTTPS | **Port(s)**: 443 | **Transport**: TCP | **Purpose**: Encrypted web communication via TLS
	- **Protocol**: FTP | **Port(s)**: 20, 21 | **Transport**: TCP | **Purpose**: Port 21 = control; Port 20 = data transfer
	- **Protocol**: SSH | **Port(s)**: 22 | **Transport**: TCP | **Purpose**: Secure remote terminal access; replaces Telnet
- **Email Protocols:**
	- **Protocol**: SMTP | **Port**: 25 / 587 | **Role**: Sending / relaying email
	- **Protocol**: POP3 | **Port**: 110 | **Role**: Retrieve email (downloads & deletes)
	- **Protocol**: IMAP | **Port**: 143 | **Role**: Retrieve email (syncs; mail stays on server)
- **Directory & Configuration Services:**
	- **Protocol**: DNS | **Port**: 53 | **Transport**: UDP/TCP | **Purpose**: Hostname ↔ IP resolution; hierarchical distributed database
	- **Protocol**: DHCP | **Port**: 67/68 | **Transport**: UDP | **Purpose**: Auto-assigns IP, mask, gateway, DNS to clients
	- **Protocol**: SNMP | **Port**: 161/162 | **Transport**: UDP | **Purpose**: Collects stats and manages network equipment
- **DNS Resolution Process:**
	- Client queries local DNS resolver (usually ISP or company DNS)
	- Resolver checks its cache; if miss, queries a Root Name Server (13 root clusters)
	- Root directs to the TLD server (e.g. .com, .org)
	- TLD server directs to the authoritative name server for the domain
	- Authoritative server returns the IP; resolver caches it and returns to client
- *Note*: DHCP DORA DHCP uses a 4-message exchange: Discover → Offer → Request → Acknowledge. Client broadcasts Discover; server offers an IP; client requests it; server confirms the lease.

## Key Terms & Quick Review

- **Key Terms Glossary:**
	- **Term**: Bandwidth | **Definition**: Maximum data-transfer rate of a channel; measured in bps, Kbps, Mbps, Gbps | **Term**: TCP | **Definition**: Reliable, ordered, error-checked delivery; connection-oriented; uses 3-way handshake
	- **Term**: Protocol | **Definition**: Agreed-upon set of rules and formats that govern the exchange of messages between two network entities | **Term**: UDP | **Definition**: Connectionless; no guarantee of delivery or order; low overhead; used for real-time apps
	- **Term**: Topology | **Definition**: Physical or logical arrangement of nodes and links in a network (bus, star, ring, mesh) | **Term**: HTTP | **Definition**: Stateless request/response protocol used by web browsers and servers; port 80
	- **Term**: IP Address | **Definition**: Unique 32-bit (IPv4) or 128-bit (IPv6) number identifying a device interface on an IP network | **Term**: FTP | **Definition**: Transfers files between client and server; uses port 21 (control) and port 20 (data)
	- **Term**: DNS | **Definition**: Hierarchical, distributed database that translates human-readable domain names to IP addresses | **Term**: Router | **Definition**: Layer-3 device that forwards packets between networks using IP routing tables; separates broadcast domains
	- **Term**: Packet | **Definition**: A formatted unit of data at Layer 3; contains source/destination IP, header info, and payload | **Term**: Firewall | **Definition**: Hardware/software that filters traffic between trusted and untrusted networks using security policy rules
	- **Term**: LAN | **Definition**: Network covering a small area (room, building, campus); high speed; privately owned; e.g. Ethernet | **Term**: Switch | **Definition**: Layer-2 device; learns MAC addresses; provides dedicated bandwidth per port; full-duplex operation
	- **Term**: WAN | **Definition**: Network spanning large geographic areas (countries, continents); uses leased lines or public Internet | **Term**: DHCP | **Definition**: Automatically assigns IP address, subnet mask, default gateway, and DNS server to network clients
- **Quick Review — Essential Facts:**
- **Network Performance Metrics:**

---

# Chapter VII: Operating Systems

## OS Concepts

**Key insight:** ==OS = software layer== between hardware and user programs; manages resources and provides services

- **OS Types:**
	- **Type**: Batch | **Description**: Jobs queued and executed without user interaction; maximises CPU utilisation
	- **Type**: Time-sharing | **Description**: Multiple users share CPU via rapid context switches; gives illusion of simultaneity
	- **Type**: Real-time | **Description**: Guarantees response within strict deadline; hard vs. soft RT
	- **Type**: Distributed | **Description**: Coordinates multiple networked computers; transparent resource sharing
	- **Type**: Embedded | **Description**: Minimal footprint OS in ROM for dedicated hardware (IoT, appliances)
- **Kernel vs User Space:**
	- Kernel space: privileged mode — direct hardware access, runs OS core (scheduler, MM, drivers)
	- User space: restricted mode — applications run here; must use system calls to request OS services
	- Mode switch triggered by syscall / trap / interrupt
- **OS Services Provided:**
	- Program execution — load, run, terminate programs
	- I/O operations — uniform interface for files and devices
	- File-system manipulation — create/delete/read/write files and directories
	- Communications — between processes on same or different machines
	- Error detection — hardware faults, program errors, I/O errors
	- Resource allocation — CPU cycles, memory, I/O ports shared fairly
	- Accounting & security — usage tracking, access-control enforcement
- *Note*: Dual-Mode Operation Hardware provides at least two modes (user / supervisor). Privileged instructions execute only in kernel mode, protecting the OS from misbehaving programs.

## Process Management

**Key insight:** ==Process = program in== execution; unit of work managed by the OS

- **Five-State Process Model:**
	- **State**: New | **Meaning**: Process being created; resources not yet allocated
	- **State**: Ready | **Meaning**: In memory, waiting for CPU; sits in ready queue
	- **State**: Running | **Meaning**: CPU executing its instructions (only one per CPU core)
	- **State**: Waiting | **Meaning**: Blocked on I/O or event; not eligible for CPU
	- **State**: Terminated | **Meaning**: Execution finished; resources being reclaimed
- **PCB Fields:**
	- PCB: PID, process state, program counter, CPU registers
	- Memory limits, open file table, I/O status, accounting info
- **Context Switching:**
- **CPU Scheduling Algorithms:**
	- **Algorithm**: FCFS | **Key Property**: Simple; may cause convoy effect (long jobs block short)
	- **Algorithm**: SJF | **Key Property**: Optimal avg wait time; requires burst-length prediction
	- **Algorithm**: RR | **Key Property**: Fair time-sharing; performance depends on quantum size
	- **Algorithm**: Priority | **Key Property**: Higher-priority first; can starve low-priority (use aging)
- `Turnaround = Completion − Arrival | Waiting = Turnaround − Burst`
- **Threads vs Processes:**
	- Process: independent address space; expensive creation & context switch
	- Thread: shares code/data/heap; own stack & registers; cheaper switch
	- Concurrency within one process; true parallelism on multi-core
- **Interprocess Communication (IPC):**
	- Shared memory: fastest; processes map same physical pages; needs synchronisation
	- Message passing: send/receive via OS kernel; safe; slower for large data
	- Pipes: unidirectional byte stream; unnamed (parent-child) or named (FIFOs)
	- Sockets: bidirectional; works across network
- *Note*: Preemptive vs Non-Preemptive Non-preemptive (cooperative) scheduling — process runs until it voluntarily yields or blocks. Preemptive — OS can interrupt running process at any time (needed for time-sharing).

## Memory Management

**Key insight:** ==MM allocates physical memory== to processes, enforces protection, and supports virtual address spaces

- **Contiguous vs Non-Contiguous:**
	- Contiguous: each process occupies one unbroken physical region; simple but causes external fragmentation
	- Non-contiguous: process split across physical frames/segments; eliminates external fragmentation
- **Paging:**
- `Physical address = Frame# × Page_size + Offset`
	- Page table maps page → frame; stored in memory (TLB caches translations)
	- Eliminates external fragmentation; internal fragmentation ≤ page size − 1
- **Segmentation:**
- *Note*: Logical address = <segment#, offset>; each segment is a variable-length unit (code, data, stack). Supports user view of memory; can cause external fragmentation.
- **Virtual Memory & Page Replacement:**
	- **Algorithm**: FIFO | **Policy**: Evict oldest; simple but suffers Bélády's anomaly
	- **Algorithm**: LRU | **Policy**: Approximates OPT; good in practice; costly to implement exactly
	- **Algorithm**: OPT | **Policy**: Theoretical minimum faults; requires future knowledge
- **Address Translation Steps (Hardware):**
	- CPU generates logical address <page#, offset>
	- Check TLB for page# → frame# mapping (hit: skip step 3)
	- On TLB miss: walk page table in RAM; load entry into TLB
	- Compute physical address = frame# × page_size + offset
	- If page not in RAM (page fault): trap to OS, load from swap, retry

## File System

**Key insight:** ==File = named, persistent== collection of related data; OS provides uniform access interface

- **File Attributes:**
	- Name, type/extension, size, timestamps (create/modify/access)
	- Permissions (owner/group/other: read/write/execute)
	- Location: pointer to first block or inode on disk
- **Directory Structures:**
	- **Structure**: Single-level | **Characteristics**: All files in one directory; simple but name collision for multiple users
	- **Structure**: Two-level | **Characteristics**: Separate directory per user; solves collision; no grouping within user
	- **Structure**: Tree (hierarchical) | **Characteristics**: Arbitrary depth subdirectories; absolute & relative paths; most common
- **Access Methods:**
	- Sequential: records read/written in order; simple; supports tapes
	- Direct (random): jump to any block by number; needed for databases
	- Indexed: index file maps keys → block addresses; enables fast keyed lookup
- **Disk Allocation Methods:**
	- **Method**: Contiguous | **Pros / Cons**: Fast sequential & direct access; external fragmentation, fixed size
	- **Method**: Linked | **Pros / Cons**: No external fragmentation; poor direct access; pointer overhead per block
	- **Method**: Indexed | **Pros / Cons**: Good direct access; index block overhead; inode in Unix
- *Note*: FAT vs inode FAT (File Allocation Table) is a linked-list-in-table variant; inode stores up to 12 direct + indirect pointers enabling very large files.
- **Disk Scheduling Algorithms:**
	- **Algorithm**: FCFS | **Head Movement Policy**: Service requests in arrival order; simple but high seek time
	- **Algorithm**: SSTF | **Head Movement Policy**: Shortest Seek Time First; greedy; may starve far-away requests
	- **Algorithm**: SCAN (elevator) | **Head Movement Policy**: Move in one direction servicing all requests; reverse at end
	- **Algorithm**: C-SCAN | **Head Movement Policy**: Circular SCAN; only services on forward sweep; more uniform wait

## Device Management

**Key insight:** ==I/O subsystem hides hardware== diversity; provides uniform interface to devices via device drivers

- **I/O Subsystem Layers:**
	- User-level I/O software (libraries, syscall wrappers)
	- Device-independent OS layer (buffering, caching, error reporting)
	- Device drivers (device-specific; supplied by hardware vendors)
	- Interrupt handlers (bottom half; respond to hardware events)
- **Interrupt Handling:**
	- Device signals CPU via interrupt line when operation completes
	- CPU saves state, jumps to ISR in interrupt vector table
	- ISR acknowledges device, processes data, restores CPU state
	- Maskable vs. non-maskable (NMI) interrupts
- **DMA (Direct Memory Access):**
- `CPU freed = transfer_size / bus_bandwidth (approx. CPU cycles saved)`
- **Buffering & Spooling:**
	- Buffering: temporary storage to absorb speed mismatch between device and process
	- Caching: copy of frequently accessed data kept faster memory
	- Spooling: disk used as large buffer for devices that cannot interleave (e.g., printer)
- *Note*: Polling vs Interrupts Polling burns CPU cycles checking device status. Interrupts are efficient for infrequent events; polling may be faster for very-high-rate I/O (avoids interrupt overhead).
- **I/O Performance Concepts:**
	- Seek time: time to move disk head to target track
	- Rotational latency: wait for target sector to rotate under head
	- Transfer time: time to read/write the data
	- Access time = seek + rotational latency + transfer time
	- SSDs eliminate seek & rotational latency; access time ~microseconds

## Deadlock

**Key insight:** ==Deadlock = set of== processes permanently blocked, each waiting for a resource held by another in the set

- **Four Necessary Conditions (Coffman, 1971):**
	- **Condition**: Mutual Exclusion | **Meaning**: At least one resource must be held non-shareably
	- **Condition**: Hold & Wait | **Meaning**: Process holds ≥1 resource while waiting to acquire more
	- **Condition**: No Preemption | **Meaning**: Resources cannot be forcibly taken; only voluntarily released
	- **Condition**: Circular Wait | **Meaning**: Chain P1→R1→P2→R2→…→Pn→Rn→P1 exists
- *Note*: All Four Must Hold Deadlock occurs only if all four conditions hold simultaneously. Preventing any one condition prevents deadlock.
- **Prevention:**
	- Break Hold & Wait: require all resources requested at once
	- Break Circular Wait: impose global ordering on resource types
	- Allow Preemption: forcibly reclaim resources from waiting processes
- **Avoidance — Banker's Algorithm:**
- `Safe state ∃ safe sequence <P1,P2,…,Pn> where each Pi's needs ≤ available + held by Pj (j<i)`
- **Detection & Recovery:**
	- Detection: wait-for graph cycle search (resource-allocation graph); run periodically or on low utilisation
	- Recovery: process termination (all or one-by-one) or resource preemption (with rollback)
- **Banker's Algorithm — Step-by-Step:**
	- Maintain: Available[], Allocation[][], Max[][]; compute Need = Max − Allocation
	- When process Pi requests resources: verify Request ≤ Need[i] and Request ≤ Available
	- Tentatively allocate: Available −= Request; Allocation[i] += Request; Need[i] −= Request
	- Run safety algorithm: find process whose Need ≤ Work; add its Allocation to Work; repeat
	- If all processes found → safe state → grant request; else → unsafe → roll back & block Pi
- `Need[i][j] = Max[i][j] − Allocation[i][j]`

## Key Terms & Quick Review


---

# Chapter VIII: Algorithms

## Algorithm Concepts — §8.1

**Key insight:** ==An algorithm is an== ordered set of unambiguous steps that produces a result and terminates in a finite time.

- **Definition:**
- **Five Essential Properties:**
	- **Property**: Finiteness | **Meaning**: Must terminate after a finite number of steps — no infinite loops
	- **Property**: Definiteness | **Meaning**: Every step must be precisely and unambiguously defined
	- **Property**: Input | **Meaning**: Zero or more well-defined inputs supplied before execution
	- **Property**: Output | **Meaning**: One or more outputs — the result of the algorithm
	- **Property**: Effectiveness | **Meaning**: Each step is basic enough to be carried out in finite time
- **Informal vs Formal Description:**
	- Informal: natural language description — easy to write, prone to ambiguity
	- Formal: pseudocode or flowchart — structured, unambiguous, closer to implementation
- **Pseudocode vs Flowchart:**
	- **Tool**: Pseudocode | **Format**: Text, structured English | **Best For**: Sequential description, textbooks, code translation
	- **Tool**: Flowchart | **Format**: Diagram with symbols | **Best For**: Visualising control flow, decision logic, loops
- *Note*: Pseudocode Conventions (Forouzan) Keywords: Algorithm, Input, Output, if…else…end if, while…end while, for…end for. Indentation shows nesting; ← denotes assignment.

## Three Constructs — §8.2

**Key insight:** ==Any algorithm can be== expressed using exactly three constructs: sequence, decision, and repetition (Böhm–Jacopini theorem).

- **1 · Sequence:**
- **2 · Decision (Selection):**
- *Note*: Chooses between paths based on a condition. Two forms:
- **3 · Repetition (Loop):**
	- **Loop**: while | **Test Position**: Pre-test (top) | **Min Executions**: 0
	- **Loop**: for | **Test Position**: Pre-test + counter | **Min Executions**: 0
	- **Loop**: do-while | **Test Position**: Post-test (bottom) | **Min Executions**: 1

## Algorithm Design — §8.3

**Key insight:** ==Good algorithm design === decompose, refine, verify. Abstract first, detail later.

- **Top-Down Design:**
	- Define the overall goal (main module)
	- Identify major sub-tasks
	- Decompose each sub-task recursively
	- Implement at the leaf level
- **Modular Decomposition:**
- *Note*: Each module has a single responsibility, a clear interface (inputs/outputs), and can be designed, tested, and understood independently.
	- Promotes code reuse and maintainability
	- Reduces complexity at each level
	- Enables parallel development by teams
- **Stepwise Refinement:**
- **Recursion vs Iteration:**
	- **Aspect**: Mechanism | **Recursion**: Function calls itself | **Iteration**: Loop repeats block
	- **Aspect**: Memory | **Recursion**: Call stack grows | **Iteration**: Constant extra space
	- **Aspect**: Termination | **Recursion**: Base case | **Iteration**: Loop condition false
	- **Aspect**: Elegance | **Recursion**: Concise for tree/graph problems | **Iteration**: Explicit, easier to trace
	- **Aspect**: Risk | **Recursion**: Stack overflow if deep | **Iteration**: Infinite loop if guard fails

## Sorting Algorithms — §8.4

**Key insight:** ==Sorting: rearrange a list== of n elements into ascending (or descending) order.

- **Selection Sort:**
- **Bubble Sort:**
- *Note*: Repeatedly compare adjacent pairs and swap if out of order; largest element "bubbles" to end each pass.
- **Insertion Sort:**
- **Complexity Summary:**
	- **Algorithm**: Selection | **Best**: O(n²) | **Average**: O(n²) | **Worst**: O(n²) | **Stable?**: No
	- **Algorithm**: Bubble | **Best**: O(n) | **Average**: O(n²) | **Worst**: O(n²) | **Stable?**: Yes
	- **Algorithm**: Insertion | **Best**: O(n) | **Average**: O(n²) | **Worst**: O(n²) | **Stable?**: Yes

## Searching Algorithms — §8.5

**Key insight:** ==Searching: locate a target== value (key) within a collection of n elements.

- **Sequential (Linear) Search — O(n):**
- *Note*: Preconditions None. Sequential search works on any list — sorted, unsorted, with duplicates. The simplest search strategy.
- **Binary Search — O(log n):**
- **Comparison:**
	- **Property**: Precondition | **Sequential**: None | **Binary**: List must be sorted
	- **Property**: Best Case | **Sequential**: O(1) | **Binary**: O(1)
	- **Property**: Worst / Average | **Sequential**: O(n) | **Binary**: O(log n)
	- **Property**: Comparisons (n=1024) | **Sequential**: up to 1 024 | **Binary**: up to 10
	- **Property**: Data structure | **Sequential**: Any array/list | **Binary**: Sorted array

## Complexity Analysis — §8.6

**Key insight:** ==Complexity measures how resource== usage (time or space) grows as input size n increases — expressed using Big-O notation.

- **Big-O Notation:**
- `T(n) = 5n² + 3n + 7 → O(n²)`
- `T(n) = 2 log n + 1 → O(log n)`
- **Common Complexity Classes (ascending):**
	- **Notation**: O(1) | **Name**: Constant | **Example**: Array index access
	- **Notation**: O(log n) | **Name**: Logarithmic | **Example**: Binary search
	- **Notation**: O(n) | **Name**: Linear | **Example**: Sequential search
	- **Notation**: O(n log n) | **Name**: Linearithmic | **Example**: Merge sort, heap sort
	- **Notation**: O(n²) | **Name**: Quadratic | **Example**: Bubble / selection sort
	- **Notation**: O(2ⁿ) | **Name**: Exponential | **Example**: Recursive Fibonacci (naïve)
- **Growth Rate Ordering:**
- `O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)`
- **Time vs Space Complexity:**
	- **Type**: Time | **Measures**: Operations / steps | **Notes**: Machine-independent count
	- **Type**: Space | **Measures**: Memory used | **Notes**: Includes auxiliary storage
- *Note*: Time-Space Trade-off Algorithms can often trade time for space: caching computed results (memoization) uses more memory but reduces recomputation — a classic time-space trade-off.
- **Complexity Classes:**
	- P: solvable in polynomial time — tractable problems
	- NP: solutions verifiable in polynomial time — includes hard combinatorial problems
	- NP-complete: hardest problems in NP — no known poly-time solution
	- Exponential: grows faster than any polynomial — intractable for large n

## Key Terms & Quick Review — §8.7


---

# Chapter IX: Programming Languages

## Language Evolution

**Key insight:** ==Evolution: machine → assembly== → high-level → 4GL → 5GL

- **Machine Language (1GL):**
	- Instructions encoded as 0s and 1s
	- Completely hardware-dependent and non-portable
	- Example: 1011 0000 0110 0001 (MOV AL, 61h on x86)
- **Assembly Language (2GL):**
- *Note*: Assembly language replaces binary opcodes with human-readable mnemonics.
	- 1:1 correspondence with machine instructions
	- Requires an assembler to translate to machine code
	- Still processor-specific; used for drivers and embedded systems
	- Example: MOV AX, BX / ADD CX, 5
- **High-Level Languages (3GL):**
	- Portable across hardware platforms
	- Examples: C, C++, Java, Python, Pascal, FORTRAN, COBOL
	- Require a compiler or interpreter
- **Generational Table:**
	- **Gen**: 1GL | **Name**: Machine Language | **Examples**: Binary opcodes
	- **Gen**: 2GL | **Name**: Assembly Language | **Examples**: x86 ASM, ARM ASM
	- **Gen**: 3GL | **Name**: High-Level | **Examples**: C, Java, Python, C++
	- **Gen**: 4GL | **Name**: Very High-Level / Domain | **Examples**: SQL, MATLAB, R
	- **Gen**: 5GL | **Name**: AI / Logic-Based | **Examples**: Prolog, LISP (AI)

## Translation

**Key insight:** ==Source code → (assembler/compiler/interpreter)== → executable

- **Assembler:**
- **Compiler vs Interpreter:**
	- **Aspect**: Translation | **Compiler**: Whole program at once | **Interpreter**: Line by line at runtime
	- **Aspect**: Output | **Compiler**: Standalone executable | **Interpreter**: No separate executable
	- **Aspect**: Speed | **Compiler**: Faster execution | **Interpreter**: Slower (overhead per line)
	- **Aspect**: Error detect | **Compiler**: Before execution | **Interpreter**: At runtime (per line)
	- **Aspect**: Portability | **Compiler**: Platform-specific binary | **Interpreter**: Source runs anywhere
	- **Aspect**: Examples | **Compiler**: C, C++, Rust, Go | **Interpreter**: Python, Ruby, PHP
- **Linker:**
- *Note*: Combines multiple object files and library references into a single executable. Resolves external symbol references between modules.
	- Static linking: libraries embedded in the executable
	- Dynamic linking: shared libraries (.dll / .so) loaded at runtime
- **Loader:**
- **JIT Compilation:**
- **Full Build Pipeline Summary:**
	- Write source code in high-level language (.c, .java, .cpp)
	- Preprocessor — expands macros and #include directives (C/C++)
	- Compiler — translates source to assembly or object code; reports syntax/type errors
	- Assembler — converts assembly to machine code object file (.o / .obj)
	- Linker — merges object files + libraries → executable (.exe / a.out)
	- Loader — OS maps executable into memory; sets up stack, heap, registers
	- CPU begins executing at program entry point (main())

## Programming Paradigms

**Key insight:** ==A paradigm is a== fundamental style or approach to programming

- **Imperative vs Declarative:**
	- **Style**: Imperative | **Focus**: How to do it — explicit steps | **Examples**: C, Pascal, Assembly
	- **Style**: Declarative | **Focus**: What to do — describe the result | **Examples**: SQL, HTML, Prolog
- **Procedural (Structured):**
	- Languages: C, Pascal, FORTRAN, COBOL
	- Emphasizes: subroutines, sequence, selection, iteration
	- State changed via variable assignment
- **Object-Oriented (OOP):**
- *Note*: Organizes code around classes and objects that model real-world entities.
	- Languages: Java, C++, Python, C#, Ruby
	- Core pillars: encapsulation, inheritance, polymorphism, abstraction
- **Functional:**
	- Languages: Haskell, Lisp, Erlang, Scala, F#
	- Features: first-class functions, immutability, recursion, higher-order functions
	- No loops — iteration via recursion or map/fold
- **Logic (Declarative):**
	- Language: Prolog
	- Programmer states what is true; runtime finds how
	- Used in AI, natural language processing, expert systems
- **Paradigm Feature Comparison:**
	- **Feature**: State | **Procedural**: Mutable variables | **OOP**: Object fields | **Functional**: Immutable values
	- **Feature**: Code unit | **Procedural**: Function/procedure | **OOP**: Class/object | **Functional**: Function (first-class)
	- **Feature**: Reuse | **Procedural**: Function calls | **OOP**: Inheritance/composition | **Functional**: Higher-order functions
	- **Feature**: Iteration | **Procedural**: for/while loops | **OOP**: for/while loops | **Functional**: Recursion / map
	- **Feature**: Side effects | **Procedural**: Common | **OOP**: Managed via encapsulation | **Functional**: Minimized / avoided

## OOP Concepts

**Key insight:** ==OOP models software as== interacting objects encapsulating state and behavior

- **Class vs Object:**
	- **Term**: Class | **Definition**: Blueprint/template defining fields (data) and methods (behavior)
	- **Term**: Object | **Definition**: Runtime instance of a class; has its own state in memory
- `Dog fido = new Dog("Fido", 3); // Java: class Dog, object fido`
- **Encapsulation:**
	- Access modifiers: private, protected, public
	- Getter/setter methods expose state safely
	- Prevents unintended external modification
- **Inheritance:**
- *Note*: Inheritance allows a subclass to extend a superclass, reusing and specializing its behavior.
	- Java: class Cat extends Animal { ... }
	- C++: class Cat : public Animal { ... };
	- Single (Java) vs multiple inheritance (C++)
	- Promotes code reuse; establishes IS-A relationships
- **Polymorphism:**
	- Compile-time (static): method overloading — same name, different parameters
	- Runtime (dynamic): method overriding via virtual dispatch
- `// Java: runtime polymorphism Animal a = new Dog(); a.speak(); // calls Dog.speak(), not Animal.speak()`
- **Abstraction:**
	- Achieved via abstract classes and interfaces
	- Java: interface Shape { double area(); }
	- Enables programming to an interface, not an implementation

## Language Components

**Key insight:** ==Every high-level language shares== core structural components

- **Primitive Data Types:**
	- **Type**: int | **Description**: Whole numbers | **Example**: int x = 42;
	- **Type**: float | **Description**: Single-precision decimal | **Example**: float pi = 3.14f;
	- **Type**: double | **Description**: Double-precision decimal | **Example**: double e = 2.718;
	- **Type**: char | **Description**: Single character (ASCII/Unicode) | **Example**: char c = 'A';
	- **Type**: bool | **Description**: True or false | **Example**: bool flag = true;
- **Composite / Derived Types:**
	- Array: contiguous block of same-type elements; indexed from 0 — int arr[5];
	- String: sequence of characters (array of char or object)
	- Pointer (C/C++): variable that stores a memory address — int *p = &x;
	- Struct/Record: group of related fields under one name
- **Variables & Constants:**
	- Variable: named memory location whose value can change — int count = 0;
	- Constant: fixed value that cannot be reassigned — const int MAX = 100;
	- Variables have: name, type, value, scope, lifetime
- **Expressions & Statements:**
	- Expression: combination of values and operators that evaluates to a value — x + y * 2
	- Statement: complete instruction that performs an action — x = x + 1;
	- Assignment: stores a value in a variable — a = b + c;
- *Note*: Type Safety Strongly typed languages (Java, Haskell) enforce type rules at compile time. Weakly typed languages (JavaScript, C) allow implicit type coercion, which can cause subtle bugs.
- **Operators:**
	- **Category**: Arithmetic | **Operators**: + - * / % | **Example**: x = 10 % 3; → 1
	- **Category**: Relational | **Operators**: == != < > <= >= | **Example**: x >= 0
	- **Category**: Logical | **Operators**: && || ! | **Example**: a && !b
	- **Category**: Bitwise | **Operators**: & | ^ ~ << >> | **Example**: x << 2 (×4)
	- **Category**: Assignment | **Operators**: = += -= *= /= | **Example**: x += 5;

## Common Language Features

**Key insight:** ==Control flow, functions, scope,== and recursion apply across all paradigms

- **Control Flow Structures:**
	- **Type**: Selection | **Construct**: if / else if / else, switch | **Use**: Conditional branching
	- **Type**: Pre-test loop | **Construct**: while (cond) | **Use**: Check before each iteration
	- **Type**: Post-test loop | **Construct**: do…while | **Use**: Execute at least once
	- **Type**: Count loop | **Construct**: for (init;cond;step) | **Use**: Fixed number of iterations
	- **Type**: Jump | **Construct**: break, continue, return | **Use**: Alter flow mid-loop/function
- **Functions / Methods:**
	- Signature: returnType name(paramType param, ...)
	- Promotes DRY principle (Don't Repeat Yourself)
	- May return a value, or void if none
- **Parameter Passing:**
	- **Method**: Pass by Value | **Behavior**: Copy of argument; original unchanged | **Languages**: C (default), Java (primitives)
	- **Method**: Pass by Reference | **Behavior**: Alias to original; changes affect caller | **Languages**: C++ (&), C# (ref)
	- **Method**: Pass by Object Ref | **Behavior**: Reference copy; object state can change | **Languages**: Java (objects), Python
- **Scope:**
	- Local scope: variable visible only within its block { }
	- Global scope: variable accessible throughout the program
	- Block scope: limited to the enclosing braces (C, Java)
	- Lexical (static) scope: determined at compile time (most languages)
- **Recursion:**
- *Note*: A function that calls itself to solve a smaller sub-problem. Requires a base case to terminate.
- `int factorial(int n) { if (n == 0) return 1; // base case return n * factorial(n - 1); // recursive case }`
- **Exception Handling:**
	- try block — code that might throw an error
	- catch block — handles a specific exception type
	- finally block — always executes (cleanup); Java, C#, Python
	- C++ uses throw / catch; Python uses raise / except
- **Standard Library & Modules:**
	- Every language ships a standard library (I/O, math, strings, collections)
	- Code is organized into modules / packages / namespaces
	- Imported on demand: import java.util.ArrayList; / import math
	- Promotes separation of concerns and code reuse across projects
	- Third-party libraries extend functionality (npm, pip, Maven, NuGet)

## Key Terms & Quick Review


---

# Chapter X: Software Engineering

## SE Fundamentals

**Key insight:** ==Software Engineering = disciplined== application of scientific & mathematical principles to design, develop, test, and maintain software economically and reliably

- **The Software Crisis:**
	- Projects routinely exceeded cost and schedule estimates
	- Delivered software often failed to meet user needs
	- Code was difficult to maintain and evolve
	- No systematic methods — programming was an art, not engineering
- **Software Quality Attributes:**
	- **Attribute**: Correctness | **Meaning**: Meets its specification exactly
	- **Attribute**: Reliability | **Meaning**: Consistent behaviour; low failure rate
	- **Attribute**: Robustness | **Meaning**: Handles unexpected inputs gracefully
	- **Attribute**: Efficiency | **Meaning**: Economical use of system resources
	- **Attribute**: Maintainability | **Meaning**: Easy to modify and extend over time
	- **Attribute**: Portability | **Meaning**: Runs on different platforms with little change
- *Note*: SE vs. Programming SE addresses the entire lifecycle — planning, analysis, design, coding, testing, deployment, maintenance — not just writing code.

## SDLC Models

**Key insight:** ==SDLC = Software Development== Life Cycle — structured process guiding a project from conception to retirement

- **Waterfall Model:**
	- Phases (linear): Requirements → Design → Implementation → Testing → Maintenance
	- Pro: Simple, easy to manage; clear milestones
	- Con: Rigid; late discovery of errors is costly
	- Use: Well-understood, stable requirements (e.g., embedded firmware)
- **Incremental Model:**
	- System built and delivered in increments; each adds functionality
	- Pro: Early working software; easier to accommodate change
	- Con: Architecture may degrade without careful management
	- Use: Large systems where partial delivery has value
- **Spiral Model:**
	- Iterates four quadrants: Plan → Risk Analysis → Engineer → Evaluate
	- Pro: Explicit risk management; supports prototyping
	- Con: Complex; requires risk expertise; expensive
	- Use: High-risk, large-scale projects
- **Agile (XP / Scrum):**
	- Short sprints (1–4 weeks); continuous delivery and feedback
	- Pro: Flexible; customer collaboration; fast response to change
	- Con: Requires active customer involvement; hard to predict end date
	- Use: Evolving requirements; web/mobile products
- *Note*: Model Comparison Shortcut Waterfall = sequential & predictive · Incremental = builds in layers · Spiral = risk-driven iterations · Agile = people & change over process & plans

## Requirements Engineering

**Key insight:** ==Requirements = description of== what the system must do and the constraints under which it must operate

- **Functional Requirements:**
	- Example: "The system shall allow users to log in with a username and password."
	- Directly testable; each maps to one or more test cases
- **Non-Functional Requirements:**
- *Note*: Define how well the system does it — quality constraints.
	- Performance — response time, throughput
	- Security — authentication, encryption standards
	- Usability — learnability, accessibility
	- Scalability — concurrent user load
	- Reliability — uptime SLA, MTBF
- **Use Cases:**
	- Components: actor, precondition, main flow, alternate flow, postcondition
	- Expressed in structured natural language or UML use case diagrams
- **User Stories (Agile):**
- `As a [role], I want [feature] so that [benefit].`
	- Short, informal; acceptance criteria attached
	- Refined into tasks during sprint planning
- **Requirements Specification (SRS):**
	- IEEE 830 / ISO 29148 define standard SRS structure
	- Must be: complete, consistent, unambiguous, verifiable, traceable

## Design Principles

**Key insight:** ==Good design = high== cohesion + low coupling + clear abstraction + information hiding

- **Modularity:**
- **Cohesion — Higher is Better:**
- *Note*: Cohesion measures how closely related the responsibilities inside one module are.
	- **Type**: Functional | **Description**: All elements contribute to one well-defined task | **Quality**: Best
	- **Type**: Sequential | **Description**: Output of one element feeds the next | **Quality**: Good
	- **Type**: Communicational | **Description**: Elements operate on same data | **Quality**: OK
	- **Type**: Coincidental | **Description**: Elements grouped arbitrarily | **Quality**: Worst
- **Coupling — Lower is Better:**
	- **Type**: Data | **Description**: Modules share only parameters | **Quality**: Best
	- **Type**: Control | **Description**: One module controls flow of another | **Quality**: OK
	- **Type**: Content | **Description**: One module modifies internals of another | **Quality**: Worst
- **Abstraction & Information Hiding:**
	- Abstraction: expose only essential details; suppress irrelevant implementation
	- Information Hiding: each module conceals its design decisions (Parnas principle)
	- Enables change in one module without impacting others
- **Design Patterns (Overview):**
	- Creational — Factory, Singleton, Builder
	- Structural — Adapter, Decorator, Facade
	- Behavioral — Observer, Strategy, Command

## Testing

**Key insight:** ==Testing = executing a== program with the intent of finding errors (Dijkstra: testing shows presence, not absence of bugs)

- **Testing Levels:**
	- Unit Testing — individual functions or classes; typically by developer; uses stubs and drivers
	- Integration Testing — combined modules; verifies interfaces; bottom-up, top-down, or big-bang
	- System Testing — complete system against functional & non-functional requirements
	- Acceptance Testing — customer validates system meets business needs; alpha/beta variants
- **Black-Box vs White-Box Testing:**
	- **Aspect**: Based on | **Black-Box**: Specification / requirements | **White-Box**: Internal code structure
	- **Aspect**: Tester knows | **Black-Box**: Inputs & expected outputs | **White-Box**: Implementation details
	- **Aspect**: Techniques | **Black-Box**: Equivalence partitioning, boundary value | **White-Box**: Statement, branch, path coverage
	- **Aspect**: Best for | **Black-Box**: Functional correctness | **White-Box**: Code thoroughness
- **Test Case Structure:**
- `Test Case = ID + Preconditions + Input + Expected Output + Pass/Fail Criterion`
- **Debugging vs Testing:**
	- ****: Goal | **Testing**: Find defects | **Debugging**: Locate & fix defects
	- ****: Who | **Testing**: Testers (or devs) | **Debugging**: Developers
	- ****: Output | **Testing**: Pass/fail report | **Debugging**: Corrected code
- *Note*: Exhaustive Testing is Impossible For any non-trivial program, the input space is infinite. Strategy: select a representative subset using risk and coverage criteria.

## Project Management

**Key insight:** ==Project Management = planning,== organising, staffing, directing, and controlling a software project to meet scope, schedule, and budget goals

- **Work Breakdown Structure (WBS):**
- **Scheduling Tools:**
	- **Tool**: Gantt Chart | **Description**: Bar chart; tasks vs time; shows parallelism and progress
	- **Tool**: PERT | **Description**: Network diagram; critical path; handles uncertainty via optimistic/pessimistic/most-likely estimates
	- **Tool**: CPM | **Description**: Critical Path Method; identifies the longest path → minimum project duration
- **PERT Time Formula:**
- `T_e = (T_o + 4·T_m + T_p) / 6`
- *Note*: T_o = optimistic · T_m = most likely · T_p = pessimistic
- **Effort Estimation:**
	- LOC (Lines of Code): straightforward but language-dependent; derived from historical data
	- Function Points: measure functionality from user perspective (inputs, outputs, queries, files, interfaces); language-independent
	- COCOMO: Constructive Cost Model — effort = a × (KLOC)^b with calibration constants
- **Risk Management:**
	- Identify risks (technical, schedule, resource, business)
	- Analyse likelihood × impact → risk exposure
	- Plan mitigation strategies (avoid, transfer, reduce, accept)
	- Monitor risks throughout project
- **Team Structures:**
	- Chief Programmer Team: one senior architect directs; efficient but bottleneck risk
	- Democratic (Egoless): flat structure; peer review culture; good for research-type work
	- Mixed: hierarchical but collaborative; most common in industry

## Key Terms & Quick Review — Chapter 10


---

# Chapter XI: Data Structures

## Arrays

**Key insight:** ==Array = contiguous block== of memory holding elements of the same type, accessed via zero-based index

- **Dimensions:**
	- 1-D: A[i] — linear list; address = base + i × size
	- 2-D: A[i][j] — matrix; stored as rows or columns in 1-D memory
	- n-D: generalised multi-dimensional grid
- **Memory Layout:**
	- **Order**: Row-major | **Formula (2-D, n cols)**: base + (i·n + j)·s | **Common In**: C, C++, Java
	- **Order**: Col-major | **Formula (2-D, n cols)**: base + (j·m + i)·s | **Common In**: Fortran, MATLAB
- **Time Complexity:**
- `Access O(1) — direct index calculation Search O(n) — must scan (unsorted); O(log n) binary search (sorted) Insert O(n) — shift elements to make room Delete O(n) — shift elements to fill gap`
- *Note*: Space Complexity Arrays use O(n) space with zero overhead per element — no pointers needed. Cache-friendly due to spatial locality.

## Linked Lists

**Key insight:** ==Linked List = dynamic== chain of nodes; each node holds data + pointer(s) to neighbour(s)

- **Node Structure:**
- `struct Node { data : T // payload next : *Node // pointer to next (singly) prev : *Node // pointer to prev (doubly) }`
- **Variants:**
	- Singly: one next pointer; traversal forward only
	- Doubly: next + prev; O(1) backward traversal; easier deletion
	- Circular: tail's next → head; useful for round-robin, playlists
- **Operations & Complexity:**
	- **Operation**: Insert at head | **Singly**: O(1) | **Doubly**: O(1)
	- **Operation**: Insert at tail | **Singly**: O(n) / O(1)* | **Doubly**: O(1)*
	- **Operation**: Delete at head | **Singly**: O(1) | **Doubly**: O(1)
	- **Operation**: Delete given node | **Singly**: O(n) | **Doubly**: O(1)
	- **Operation**: Search | **Singly**: O(n) | **Doubly**: O(n)
	- **Operation**: Random access | **Singly**: O(n) | **Doubly**: O(n)
- **Array vs Linked List:**
	- **Property**: Size | **Array**: Static | **Linked List**: Dynamic
	- **Property**: Access | **Array**: O(1) | **Linked List**: O(n)
	- **Property**: Insert/Delete | **Array**: O(n) | **Linked List**: O(1) at known node
	- **Property**: Memory overhead | **Array**: None | **Linked List**: Per-node pointer(s)
	- **Property**: Cache locality | **Array**: Good | **Linked List**: Poor
- *Note*: Common Pitfall Forgetting to update the tail pointer on insert/delete at tail — leads to dangling references or memory leaks.

## Stacks

**Key insight:** ==Stack = LIFO (Last-In, First-Out)== - only the top element is accessible at any time

- **Core Operations — All O(1):**
	- push(x): add element x on top
	- pop(): remove & return the top element
	- peek() / top(): return top without removing
	- isEmpty(): check if stack has no elements
	- size(): number of elements currently held
- **Implementations:**
- `Array-based: top index tracks position; push = A[++top]=x; pop = A[top--] List-based: insert/remove at head of singly linked list`
- **Applications:**
	- Expression evaluation: infix → postfix; evaluate postfix (RPN)
	- Balanced brackets: push open, pop on close — mismatch = error
	- Function call stack: activation records pushed/popped on call/return
	- Undo/redo: editor keeps undo stack of reversible actions
	- DFS: iterative depth-first search uses an explicit stack
	- Backtracking: maze solving, N-Queens, parsing
- *Note*: Stack Overflow Occurs when push is called on a full array-backed stack (fixed capacity). With linked list implementation, limited only by heap memory.

## Queues

**Key insight:** ==Queue = FIFO (First-In, First-Out)== - elements enter at rear, leave at front

- **Core Operations — All O(1):**
	- enqueue(x): add element at the rear
	- dequeue(): remove & return element from front
	- front() / peek(): inspect front without removing
	- rear(): inspect rear without removing
	- isEmpty() / size()
- **Variants:**
	- **Type**: Circular Queue | **Description**: Fixed array with modulo wrap; avoids wasted space after dequeue
	- **Type**: Priority Queue | **Description**: Dequeue by priority; implemented with heap (O(log n) ops)
	- **Type**: Deque | **Description**: Double-ended; supports push/pop at both ends; O(1) all ops
- `Circular queue state: front = (front + 1) % capacity // after dequeue rear = (rear + 1) % capacity // after enqueue full : (rear + 1) % cap == front empty : front == rear`
- **Applications:**
	- BFS: breadth-first graph/tree traversal uses a queue
	- CPU / disk scheduling: OS job queues, round-robin scheduling
	- Print spooler: print jobs queued in FIFO order
	- Asynchronous data transfer: keyboard buffer, network packet queues
	- Simulation: modelling waiting lines (queueing theory)
- *Note*: Priority Queue vs Sorted Array Heap-based priority queue: insert O(log n), extract-min/max O(log n). Sorted array: insert O(n), extract O(1). Choose heap when inserts are frequent.

## Trees

**Key insight:** ==Tree = hierarchical, acyclic,== connected graph with one root; n nodes → n−1 edges

- **Terminology:**
	- **Term**: Root | **Definition**: Top node; no parent
	- **Term**: Leaf | **Definition**: Node with degree 0 (no children)
	- **Term**: Degree | **Definition**: Number of children of a node
	- **Term**: Depth | **Definition**: Edge count from root to node
	- **Term**: Height | **Definition**: Longest path from node to leaf; tree height = height of root
	- **Term**: Level | **Definition**: All nodes at same depth share a level
	- **Term**: Subtree | **Definition**: Node + all its descendants
- **Binary Search Tree (BST):**
- `BST property: left subtree keys < node key < right subtree keys Insert: compare & descend left/right; place at null slot O(h) Search: compare & descend left/right until found or null O(h) Delete: 3 cases — leaf, one child, two children (inorder succ) O(h) h = O(log n) balanced, O(n) worst (degenerate/sorted input)`
- **Tree Traversals:**
	- In-order (L → Root → R): produces sorted output from BST
	- Pre-order (Root → L → R): used for copying/serialising tree
	- Post-order (L → R → Root): used for deletion, expression evaluation
	- Level-order (BFS): visits nodes level by level using a queue
- *Note*: Balanced vs Degenerate BST A balanced BST (e.g., AVL, Red-Black) guarantees O(log n) ops. A degenerate BST (sorted insertion) degrades to O(n) — essentially a linked list.

## Graphs

**Key insight:** ==Graph G = (V,== E): set of vertices V and edges E connecting pairs of vertices

- **Classification:**
	- Undirected: edge (u,v) = (v,u); no direction; models roads, friendships
	- Directed (Digraph): edge (u,v) ≠ (v,u); one-way; models web links, dependencies
	- Weighted: each edge carries a numeric weight (cost, distance, capacity)
	- Cyclic / Acyclic: DAG (Directed Acyclic Graph) has no cycles
	- Connected: every vertex reachable from every other (undirected)
- **Representations:**
	- **Structure**: Adjacency Matrix | **Space**: O(V²) | **Edge check**: O(1) | **Neighbours**: O(V) | **Best for**: Dense graphs
	- **Structure**: Adjacency List | **Space**: O(V+E) | **Edge check**: O(degree) | **Neighbours**: O(degree) | **Best for**: Sparse graphs
- **Graph Traversals:**
- `BFS (Breadth-First Search): queue-based; visits level by level → shortest path in unweighted graphs; O(V+E) DFS (Depth-First Search): stack/recursion; explores deep first → cycle detection, topological sort, SCCs; O(V+E)`
- **Shortest Path Algorithms:**
	- Dijkstra: non-negative weights; O((V+E) log V)
	- Bellman-Ford: handles negative weights; O(VE)
	- Floyd-Warshall: all-pairs; O(V³)
- *Note*: Negative Cycles Dijkstra fails on negative-weight edges. Use Bellman-Ford; it can also detect negative-weight cycles (shortest path is undefined when one exists).

## Complexity Comparison · Key Terms · Quick Review

- **Big-O Complexity — All Data Structures × Operations:**
	- **Structure**: Array | **Access**: O(1) | **Search (avg)**: O(n) | **Search (worst)**: O(n) | **Insert (best)**: O(n) | **Insert (worst)**: O(n) | **Delete (best)**: O(n) | **Delete (worst)**: O(n) | **Space**: O(n)
	- **Structure**: Singly Linked List | **Access**: O(n) | **Search (avg)**: O(n) | **Search (worst)**: O(n) | **Insert (best)**: O(1) | **Insert (worst)**: O(1) | **Delete (best)**: O(1) | **Delete (worst)**: O(n) | **Space**: O(n)
	- **Structure**: Doubly Linked List | **Access**: O(n) | **Search (avg)**: O(n) | **Search (worst)**: O(n) | **Insert (best)**: O(1) | **Insert (worst)**: O(1) | **Delete (best)**: O(1) | **Delete (worst)**: O(1) | **Space**: O(n)
	- **Structure**: Stack (array) | **Access**: O(n) | **Search (avg)**: O(n) | **Search (worst)**: O(n) | **Insert (best)**: O(1) | **Insert (worst)**: O(1) | **Delete (best)**: O(1) | **Delete (worst)**: O(1) | **Space**: O(n)
	- **Structure**: Queue (array) | **Access**: O(n) | **Search (avg)**: O(n) | **Search (worst)**: O(n) | **Insert (best)**: O(1) | **Insert (worst)**: O(1) | **Delete (best)**: O(1) | **Delete (worst)**: O(1) | **Space**: O(n)
	- **Structure**: BST (balanced) | **Access**: — | **Search (avg)**: O(log n) | **Search (worst)**: O(n) | **Insert (best)**: O(log n) | **Insert (worst)**: O(n) | **Delete (best)**: O(log n) | **Delete (worst)**: O(n) | **Space**: O(n)
	- **Structure**: Hash Table | **Access**: — | **Search (avg)**: O(1) | **Search (worst)**: O(n) | **Insert (best)**: O(1) | **Insert (worst)**: O(n) | **Delete (best)**: O(1) | **Delete (worst)**: O(n) | **Space**: O(n)
	- **Structure**: Graph (adj. list) | **Access**: — | **Search (avg)**: O(V+E) | **Search (worst)**: O(V+E) | **Insert (best)**: O(1) | **Insert (worst)**: O(1) | **Delete (best)**: O(E) | **Delete (worst)**: O(E) | **Space**: O(V+E)
- **Key Terms:**
	- Array — static, index-based, contiguous storage
	- Linked List — dynamic, pointer-chained nodes
	- Stack — LIFO; push/pop/peek at top
	- Queue — FIFO; enqueue at rear, dequeue at front
	- Priority Queue — ordered by key; heap-backed
	- Deque — double-ended queue
	- Tree — acyclic hierarchy; root + children
	- BST — binary search tree; sorted structure
	- AVL Tree — height-balanced BST; O(log n) all ops
	- Heap — complete tree; min/max at root; O(log n) insert
	- Graph — vertices + edges; directed or undirected
	- Adjacency Matrix — O(V²) space; O(1) edge lookup
	- Adjacency List — O(V+E) space; efficient for sparse
	- BFS — breadth-first search; shortest unweighted path
	- DFS — depth-first search; uses stack/recursion
	- Big-O Notation — asymptotic upper bound on complexity
- **Quick Review — Chapter 11 Essentials:**

---

# Chapter XII: Abstract Data Types

## ADT Concept

**Key insight:** ==ADT = data +== operations defined mathematically, independent of any implementation

- **Abstraction vs Implementation:**
	- **Abstraction (ADT)**: Defines behavior via operations | **Implementation**: Specifies structure in memory
	- **Abstraction (ADT)**: Language- and machine-independent | **Implementation**: Tied to a language / platform
	- **Abstraction (ADT)**: Hides internal details | **Implementation**: Exposes memory layout
	- **Abstraction (ADT)**: Stated as a contract / interface | **Implementation**: Array, linked list, tree, etc.
- **Interface vs Implementation:**
	- Interface — the set of allowed operations and their signatures
	- Implementation — the concrete data structure + algorithms that fulfill the interface
	- Users depend only on the interface; internals may change freely
- **Encapsulation:**
- *Note*: Encapsulation enforces the ADT contract: data is accessed exclusively through the defined operations. No direct manipulation of internal representation is permitted.

## Stack ADT

**Key insight:** ==Stack: ordered list; insertions== and deletions restricted to one end (the top) — LIFO

- **Formal Operations:**
	- **Operation**: push(x) | **Pre-condition**: stack is not full | **Post-condition**: x on top; size+1
	- **Operation**: pop() | **Pre-condition**: stack is not empty | **Post-condition**: top element removed; returned
	- **Operation**: peek() | **Pre-condition**: stack is not empty | **Post-condition**: top element returned; unchanged
	- **Operation**: isEmpty() | **Pre-condition**: — | **Post-condition**: returns true if size = 0
	- **Operation**: isFull() | **Pre-condition**: — | **Post-condition**: returns true if size = capacity
- **Pre / Post-Condition Pattern:**
- `pre: stack not empty post: top ← stack[top-1]; top--; return value`
- **Applications:**
	- Function call / return (call stack)
	- Expression evaluation & conversion (infix → postfix)
	- Undo / redo mechanisms in editors
	- Backtracking algorithms (maze, DFS)
	- Balanced-parentheses / syntax checking
- **Array-Based Stack — Key Formulas:**
- `push(x): stack[++top] = x // pre: top < capacity-1 pop(): return stack[top--] // pre: top >= 0 peek(): return stack[top] // pre: top >= 0 isEmpty: top == -1 | isFull: top == capacity-1`
- *Note*: Stack Overflow Pushing onto a full array-based stack → stack overflow. Popping from empty → underflow. Always guard with isFull() / isEmpty().

## Queue ADT

**Key insight:** ==Queue: ordered list; insertions== at rear, deletions at front — FIFO

- **Formal Operations:**
	- **Operation**: enqueue(x) | **Pre-condition**: queue not full | **Post-condition**: x added at rear; size+1
	- **Operation**: dequeue() | **Pre-condition**: queue not empty | **Post-condition**: front element removed; returned
	- **Operation**: front() | **Pre-condition**: queue not empty | **Post-condition**: front element returned; unchanged
	- **Operation**: isEmpty() | **Pre-condition**: — | **Post-condition**: returns true if size = 0
	- **Operation**: isFull() | **Pre-condition**: — | **Post-condition**: returns true if size = capacity
- **Circular Queue:**
- *Note*: Array-based queues waste space as front advances. A circular queue treats the array as a ring:
- `rear = (rear + 1) % capacity front = (front + 1) % capacity full when (rear+1)%capacity == front`
- **Priority Queue ADT:**
	- Each element has an associated priority
	- dequeue() removes the highest-priority element, not simply the oldest
	- Typical implementation: binary heap
	- Applications: OS scheduling, Dijkstra's algorithm, Huffman coding
- **Deque (Double-Ended Queue):**
	- Generalizes both stack and queue: insert/delete allowed at both ends
	- Operations: addFront, addRear, removeFront, removeRear
	- Can emulate a stack (use one end only) or a queue (add rear, remove front)

## List ADT

**Key insight:** ==List: finite, ordered sequence== of elements of the same type; position is meaningful

- **Ordered vs Unordered List:**
	- **Type**: Ordered list | **Ordering Criterion**: Element value / key | **Typical Use**: Search, sorted output
	- **Type**: Unordered list | **Ordering Criterion**: Insertion position | **Typical Use**: General sequence, history
- **Formal Operations:**
	- **Operation**: insert(pos, x) | **Description**: Add x at given position
	- **Operation**: delete(pos) | **Description**: Remove element at position
	- **Operation**: retrieve(pos) | **Description**: Return element at position (no removal)
	- **Operation**: traverse() | **Description**: Visit every element in order
	- **Operation**: search(x) | **Description**: Return position of x (or not-found)
	- **Operation**: length() | **Description**: Return number of elements
- **Array-Based vs Linked Implementation:**
	- **Aspect**: Access by index | **Array**: O(1) | **Linked List**: O(n)
	- **Aspect**: Insert / delete middle | **Array**: O(n) shift | **Linked List**: O(1) with ptr
	- **Aspect**: Memory overhead | **Array**: Low | **Linked List**: Pointer per node
	- **Aspect**: Dynamic sizing | **Array**: Fixed / realloc | **Linked List**: Naturally dynamic
- *Note*: Position vs Index List ADT positions are often 1-based in textbook definitions. Always check whether an implementation uses 0-based or 1-based indexing to avoid off-by-one errors.

## Tree ADT

**Key insight:** ==Tree ADT==: hierarchical structure; one root, each node has ≥ 0 children, no cycles

- **Binary Tree ADT:**
	- Each node has at most two children: left and right
	- Operations: insert, delete, search, traverse (pre/in/post-order)
	- Full vs Complete binary tree distinctions matter for implementation
- **BST (Binary Search Tree) ADT:**
- `search: O(log n) avg, O(n) worst (degenerate) insert: O(log n) avg | delete: O(log n) avg`
- **Heap ADT:**
	- **Property**: Root contains | **Min-Heap**: Smallest key | **Max-Heap**: Largest key
	- **Property**: Parent vs child | **Min-Heap**: parent ≤ child | **Max-Heap**: parent ≥ child
	- **Property**: Common use | **Min-Heap**: Priority queue (min) | **Max-Heap**: Heap sort
- **Heap Operations:**
	- **Operation**: insert(x) | **Complexity**: O(log n) | **Method**: Add at end; sift-up
	- **Operation**: delete-min/max | **Complexity**: O(log n) | **Method**: Remove root; replace with last; sift-down
	- **Operation**: heapify | **Complexity**: O(n) | **Method**: Build heap from unsorted array bottom-up
	- **Operation**: peek | **Complexity**: O(1) | **Method**: Read root without removal
- **Tree Traversals:**
	- **Order**: Pre-order | **Visit Sequence**: Root, Left, Right | **Use Case**: Copy / serialize tree
	- **Order**: In-order | **Visit Sequence**: Left, Root, Right | **Use Case**: BST sorted output
	- **Order**: Post-order | **Visit Sequence**: Left, Right, Root | **Use Case**: Delete tree, evaluate expression tree
	- **Order**: Level-order | **Visit Sequence**: BFS by level | **Use Case**: Level-wise processing
- *Note*: Heap Sort Phase 1: heapify the array — O(n). Phase 2: repeatedly extract-max into sorted position — O(n log n). Total: O(n log n), in-place, not stable.

## ADT Implementation Strategies

**Key insight:** ==Choose implementation by access== patterns, memory constraints, and language support

- **Array-Based vs Pointer-Based:**
	- **Factor**: Cache locality | **Array-Based**: Excellent | **Pointer-Based**: Poor (scattered)
	- **Factor**: Random access | **Array-Based**: O(1) | **Pointer-Based**: O(n)
	- **Factor**: Mid-list insert/delete | **Array-Based**: O(n) | **Pointer-Based**: O(1) with ptr
	- **Factor**: Max size known? | **Array-Based**: Required (static) | **Pointer-Based**: Not required
	- **Factor**: Memory per element | **Array-Based**: Data only | **Pointer-Based**: Data + pointer(s)
- **Time / Space Trade-offs:**
	- Hash table: O(1) avg search but O(n) worst; uses extra load-factor space
	- Balanced BST (AVL/Red-Black): O(log n) guaranteed; rotation overhead
	- Sorted array: O(log n) binary search; O(n) insert/delete
	- Skip list: O(log n) expected; probabilistic; pointer overhead
- **Generic / Template Types:**
- `Stack<T> // C++ template Stack<T> // Java generic // Single implementation; compiler generates type-safe code`
- *Note*: Design Principle Define the ADT interface first. Select the implementation only after analyzing the expected operations and their required complexities — not the other way around.

## Key Terms & Quick Review — Chapter 12


---

# Chapter XIII: File Structure

## File Concepts

**Key insight:** ==File = named, persistent== collection of related records stored on secondary storage

- **Data Hierarchy:**
- **Key Definitions:**
	- **Unit**: Field | **Description**: Smallest named unit of data; has a type and length (e.g. age INT)
	- **Unit**: Record | **Description**: Collection of related fields; describes one entity (e.g. one employee)
	- **Unit**: File | **Description**: Collection of related records; named and persisted on disk
	- **Unit**: Key field | **Description**: Field whose value uniquely identifies a record within the file
- **File Attributes (Metadata):**
- *Note*: name · type · size · location · timestamps (created/modified/accessed) · owner · permissions · FCB pointer
- **Text vs Binary Files:**
	- **Type**: Text | **Encoding**: Printable ASCII/Unicode; newline-delimited | **Use**: Source code, config, CSV
	- **Type**: Binary | **Encoding**: Raw byte patterns; compact, machine-readable | **Use**: Images, executables, DBs
- **File Operations:**
	- Create — allocate space; add entry to directory
	- Open — load FCB into memory; return file descriptor
	- Close — flush buffers; release file descriptor
	- Read — copy bytes from file into process buffer
	- Write — copy bytes from process buffer into file
	- Seek — reposition file pointer (random access)
	- Delete — release space; remove directory entry

## Sequential File Organization

**Key insight:** ==Records stored one after== another in physical (insertion) order; access is strictly serial

- **Fixed-Length Records:**
- `offset(i) = i × R (0-based index) Example: R=128 B, record 5 → offset = 640 B`
	- Simple implementation; O(1) random access by record number
	- Wasted space when fields are shorter than their maximum size
	- Deletion leaves "holes" — must compact or mark as deleted
- **Variable-Length Records:**
	- Records differ in size; use length-prefix or delimiter approach
	- Length-prefix: first 2–4 bytes of each record store its byte length
	- Delimiter: special byte sequence (e.g. \n, \0) marks record end
	- Enables efficient storage of VARCHAR fields; no wasted padding
	- Random access requires scanning from beginning — O(n) in worst case
- **Advantages:**
	- Simplest organization to implement and understand
	- Excellent cache/disk locality for sequential scans
	- Efficient for full-file batch processing
- **Disadvantages:**
	- No efficient random/keyed access — must read from start
	- Insertion in sorted order forces shifting all subsequent records
	- Deletion requires compaction or tombstone marking
- *Note*: Ideal Use Cases Payroll processing, monthly billing runs, transaction log replay, data backups — any workload that processes every record in order.

## Indexed File Organization

**Key insight:** ==A separate index structure== maps search-key values to record addresses, enabling O(log n) keyed access

- **Index Structure:**
- **Dense vs Sparse Index:**
	- **Type**: Dense | **Entries**: One entry per record | **Requirement**: Works on any file order; larger index
	- **Type**: Sparse | **Entries**: One entry per block | **Requirement**: File must be sorted on search key; smaller index
- **Primary vs Secondary Index:**
	- Primary index: built on the ordering key of the data file; one entry per block (sparse is typical)
	- Secondary index: built on a non-ordering attribute; must be dense; may have duplicate keys → bucket of pointers
- **B-Tree Index:**
- *Note*: A self-balancing tree where all leaves are at the same depth. Used by virtually every DBMS for its index structures.
- `Tree depth = ⌈log_m(N)⌉ m = order (max pointers per node) N = number of indexed keys`
	- Each internal node holds up to m−1 keys and m child pointers
	- Search, insert, delete: O(logm N)
	- B+ tree variant: all data in leaves; inner nodes hold keys only → efficient range scans via leaf linked list
- **Indexed Lookup Process:**
	- Binary-search the index (or traverse B-tree) for target key
	- Retrieve the block pointer from the matching index entry
	- Read that disk block into memory buffer
	- Scan block for exact record match

## Hashed File Organization

**Key insight:** ==A hash function maps== a record key directly to a bucket address — average O(1) access with no index traversal

- **Hash Function:**
- `Division method: h(k) = k mod B Folding: split k into parts, add them, mod B Mid-square: square k, take middle digits, mod B`
	- Choose B as a prime number to reduce clustering
	- Bucket = disk block (or page) holding one or more records
- **Collision Handling:**
- *Note*: A collision occurs when two keys produce the same bucket address.
	- **Strategy**: Open Addressing | **Description**: Probe next available slot: linear (+1), quadratic (+i²), double hashing
	- **Strategy**: Chaining | **Description**: Each bucket points to an overflow linked list; no clustering
	- **Strategy**: Overflow Area | **Description**: Separate file region reserved for overflow records
- **Load Factor:**
- `α = n / B (n = records stored, B = buckets) Ideal range: 0.70 – 0.80 α > 0.9 → performance degrades rapidly`
- **Rehashing:**
	- When α exceeds threshold, allocate ~2× buckets and redistribute all records
	- Extendible hashing: splits only the overflowing bucket using a directory; avoids full rehash
	- Linear hashing: splits buckets in a fixed round-robin order as load grows
	- Cost of rehash: O(n) — all n records must be re-hashed and rewritten

## Directory Structures

**Key insight:** ==A directory is a== symbol table mapping file names to their File Control Block (FCB / inode) metadata

- **Single-Level Directory:**
	- All files in one flat namespace; simplest implementation
	- Problem: name collisions in multi-user systems; no grouping
- **Two-Level Directory:**
	- Master File Directory (MFD) → per-user User File Directory (UFD)
	- Isolates namespaces; users may have identically named files
	- Problem: users cannot share files; no subdirectory support
- **Tree-Structured Directory:**
	- Arbitrary depth; each node is a file or a directory
	- Current Working Directory (CWD) maintained per process
	- Enables intuitive hierarchical organisation of files
	- Absolute path: from root → every directory → file
	- Relative path: from CWD; .. = parent directory
- **Acyclic Graph Directory:**
	- Shared files/subdirectories via links — one physical file, multiple directory entries
	- Hard link: second directory entry pointing to same inode; reference-counted
	- Symbolic (soft) link: special file containing target path; can cross file systems
	- No cycles allowed → deletion is safe using reference counts
- **Mounting:**
- *Note*: General Graph Directories If cycles are permitted (e.g. via hard links to directories), simple reference counting fails. The OS must run a garbage-collection cycle to reclaim unreachable storage.

## File Access & Protection

**Key insight:** ==An ACL stores a== list of (user or group, allowed operations) pairs for each file or directory.

- **Access Methods:**
	- **Method**: Sequential | **Description**: Read/write in order; pointer auto-advances; can rewind | **Best For**: Log files, tape backups
	- **Method**: Direct (Random) | **Description**: Seek to any block number; O(1) for fixed-length records | **Best For**: Databases, OS paging
	- **Method**: Indexed | **Description**: Look up key in index, then direct-access the block | **Best For**: DBMS table access
- **Access Rights:**
	- Read (r) — read file contents; list directory entries
	- Write (w) — modify or truncate file contents
	- Execute (x) — run file as a program; traverse directory
	- Append (a) — add data to end of file only; no overwrite
	- Delete (d) — remove file from directory; free its space
	- List (l) — view directory entries and file names
- **Unix Permission Model:**
- `Permissions: rwx rwx rwx owner group others Example: 754 = rwx r-x r-- owner: read+write+exec group: read+exec others: read only Special bits: setuid(4), setgid(2), sticky(1)`
- **Access Control List (ACL):**
	- More flexible than Unix 3-class model — grant access to arbitrary users
	- Windows NTFS and POSIX.1e both implement ACLs
	- Can combine with Unix bits: check ACL first, then fall back to mode bits
	- ACL entry format: (alice, rw), (dev-team, r-x), (*, ---)
- *Note*: Principle of Least Privilege Grant each user/process only the minimum access rights needed to perform its task. This limits the damage that can result from accidental or malicious misuse.

## Key Terms & Quick Review — CH13


---

# Chapter XIV: Databases

## Database Concepts

**Key insight:** ==Database = organized collection== of logically related data managed by a DBMS

- **DBMS vs. File System:**
	- **File System**: Data redundancy & inconsistency | **DBMS**: Centralized control; reduced redundancy
	- **File System**: Difficult concurrent access | **DBMS**: Built-in concurrency control
	- **File System**: No standard query language | **DBMS**: Declarative query language (SQL)
	- **File System**: Limited security & integrity | **DBMS**: Authorization, constraints enforced
	- **File System**: Program–data dependency | **DBMS**: Data independence from programs
- **Data Independence:**
	- Physical independence: change storage structures without rewriting programs
	- Logical independence: change logical schema without rewriting programs
- **ANSI/SPARC 3-Level Architecture:**
- `External → Conceptual → Internal`
	- External level: user/application views — what each user sees
	- Conceptual level: community view — entire logical structure of the database
	- Internal level: physical storage — how data is stored on disk
- **Database Users:**
	- DBA — manages schema, access rights, backups, tuning
	- Application developers — design and code DB-backed programs
	- End users — naive (forms/menus) or sophisticated (ad-hoc queries)
- *Note*: Key Benefit Data independence separates what data exists (logical) from how it is stored (physical), enabling schema evolution without cascading rewrites.

## Relational Model

**Key insight:** ==Codd (1970): represent data== as a set of relations (tables) with no ordering assumed

- **Core Terminology:**
	- **Formal Term**: Relation | **Common Term**: Table | **Meaning**: Set of tuples with same attributes
	- **Formal Term**: Tuple | **Common Term**: Row / Record | **Meaning**: One data instance
	- **Formal Term**: Attribute | **Common Term**: Column / Field | **Meaning**: Named property with a domain
	- **Formal Term**: Domain | **Common Term**: Data type | **Meaning**: Set of allowed values
	- **Formal Term**: Degree | **Common Term**: Arity | **Meaning**: Number of attributes
	- **Formal Term**: Cardinality | **Common Term**: Row count | **Meaning**: Number of tuples
- **Keys:**
	- Super key: any attribute set that uniquely identifies a tuple
	- Candidate key: minimal super key — no attribute can be removed
	- Primary key — one chosen candidate key; must be unique & non-null
	- Foreign key — attribute referencing a primary key in another relation
- **Referential Integrity:**
- *Note*: Constraint A foreign key value must either match an existing primary key value in the referenced relation, or be NULL. Violations are rejected by the DBMS.
- **Relational Algebra Operations:**
	- **Operation**: Selection | **Symbol**: σ | **Description**: Filter rows by condition
	- **Operation**: Projection | **Symbol**: π | **Description**: Keep specific columns
	- **Operation**: Union | **Symbol**: ∪ | **Description**: Combine two compatible relations
	- **Operation**: Intersection | **Symbol**: ∩ | **Description**: Rows common to both
	- **Operation**: Difference | **Symbol**: − | **Description**: Rows in R1 but not R2
	- **Operation**: Cartesian Product | **Symbol**: × | **Description**: All row combinations
	- **Operation**: Join | **Symbol**: ⋈ | **Description**: Combine on matching attribute

## SQL — Structured Query Language

**Key insight:** ==SQL = standard language== for defining, manipulating, and querying relational databases

- **DDL — Data Definition Language:**
	- CREATE TABLE t (col type [constraint], …) — define new table
	- ALTER TABLE t ADD|DROP|MODIFY col … — modify schema
	- DROP TABLE t — permanently remove table & data
	- CREATE INDEX idx ON t(col) — speed up lookups
- **DML — Data Manipulation Language:**
- `SELECT cols FROM table WHERE cond GROUP BY … HAVING … ORDER BY … LIMIT n`
	- INSERT INTO t (c1,c2) VALUES (v1,v2)
	- UPDATE t SET c1=v1 WHERE cond
	- DELETE FROM t WHERE cond
- **WHERE Clause Operators:**
	- = <> < > <= >= — comparison
	- AND OR NOT — logical operators
	- BETWEEN v1 AND v2 — range test
	- LIKE 'pattern%' — wildcard string match
	- IN (v1, v2, …) — membership test
	- IS NULL / IS NOT NULL — null check
- **JOIN Types:**
	- **Join**: INNER JOIN | **Returns**: Matching rows in both tables
	- **Join**: LEFT OUTER JOIN | **Returns**: All left rows + matched right (NULLs for no match)
	- **Join**: RIGHT OUTER JOIN | **Returns**: All right rows + matched left
	- **Join**: FULL OUTER JOIN | **Returns**: All rows from both; NULLs where unmatched
	- **Join**: CROSS JOIN | **Returns**: Cartesian product of both tables
- **Aggregate Functions:**
	- COUNT(*) — number of rows
	- SUM(col) — total of numeric column
	- AVG(col) — arithmetic mean
	- MAX(col) / MIN(col) — extreme values
- *Note*: GROUP BY vs HAVING WHERE filters rows before grouping; HAVING filters groups after aggregation. Never use an aggregate function in a WHERE clause.

## Database Design — ER & Normalization

**Key insight:** ==Design goal==: faithful, non-redundant representation of the real-world domain

- **ER Model Components:**
	- **Component**: Entity | **Notation**: Rectangle | **Meaning**: Distinguishable real-world object
	- **Component**: Weak Entity | **Notation**: Double rectangle | **Meaning**: Depends on owner entity for identity
	- **Component**: Attribute | **Notation**: Ellipse | **Meaning**: Property of an entity
	- **Component**: Key attribute | **Notation**: Underlined ellipse | **Meaning**: Uniquely identifies entity instance
	- **Component**: Relationship | **Notation**: Diamond | **Meaning**: Association among entity sets
- **Cardinality Constraints:**
	- 1:1 — one entity relates to exactly one other
	- 1:N — one entity relates to many others (most common)
	- M:N — many entities relate to many; requires junction table
- **ER-to-Relational Mapping Rules:**
	- Strong entity → relation; key attribute → primary key
	- Weak entity → relation; include owner PK as partial key
	- 1:1 relationship → add FK to either side (choose less-null side)
	- 1:N relationship → add FK on the N-side relation
	- M:N relationship → create new junction relation with both PKs as composite PK
	- Multi-valued attribute → new relation with entity PK + attribute value
- **Normalization:**
	- **Normal Form**: 1NF | **Requirement**: Atomic values; no repeating groups
	- **Normal Form**: 2NF | **Requirement**: 1NF + no partial dependency on PK
	- **Normal Form**: 3NF | **Requirement**: 2NF + no transitive dependency
	- **Normal Form**: BCNF | **Requirement**: Every determinant is a candidate key
- *Note*: Functional Dependency X → Y means knowing X uniquely determines Y. Normalization eliminates problematic FDs by decomposing relations, always preserving lossless join & dependency preservation.

## Transaction Management

**Key insight:** ==Transaction = logical unit== of work; either commits fully or rolls back completely

- **ACID Properties:**
	- **Property**: Atomicity | **Guarantee**: All-or-nothing execution
	- **Property**: Consistency | **Guarantee**: DB moves between valid states only
	- **Property**: Isolation | **Guarantee**: Concurrent Txns appear serial
	- **Property**: Durability | **Guarantee**: Committed changes survive crashes
- **Transaction States:**
- `Active → Partially Committed → CommittedActive → Failed → Aborted (Rolled Back)`
- **Concurrency Problems:**
	- Lost update: two txns read & overwrite the same item; one update is lost
	- Dirty read: txn reads uncommitted data from another txn that later aborts
	- Non-repeatable read: same query returns different rows within one txn
	- Phantom read: new rows appear between two reads in same txn
- **Locking Protocol:**
	- Shared lock (S) — read-only; multiple holders allowed
	- Exclusive lock (X) — read/write; single holder only
	- Two-Phase Locking (2PL): growing phase (acquire), shrinking phase (release)
- **Deadlock:**
- *Note*: Deadlock Condition Two or more transactions each hold a lock and wait for a lock held by the other. No progress is possible. Resolution: detect via wait-for graph and abort one victim transaction; or use timeouts.

## Database Models — Overview & NoSQL

**Key insight:** ==A data model defines== how data is logically structured, stored, and manipulated

- **Classical Models:**
	- **Model**: Hierarchical | **Structure**: Tree (parent/child) | **Strength**: Fast access via path | **Weakness**: Rigid; no M:N naturally
	- **Model**: Network | **Structure**: Graph (sets) | **Strength**: M:N directly supported | **Weakness**: Complex pointer navigation
	- **Model**: Relational | **Structure**: Tables (relations) | **Strength**: Simple, flexible, SQL | **Weakness**: Joins can be expensive
	- **Model**: Object-Oriented | **Structure**: Objects & classes | **Strength**: Rich types, no impedance | **Weakness**: Limited standardization
- **NoSQL Models:**
	- **Type**: Key-Value | **Example**: Redis, DynamoDB | **Best For**: Session cache, lookups
	- **Type**: Document | **Example**: MongoDB, CouchDB | **Best For**: Content, catalogs, events
	- **Type**: Column-Family | **Example**: Cassandra, HBase | **Best For**: Time-series, analytics
	- **Type**: Graph | **Example**: Neo4j, Amazon Neptune | **Best For**: Social nets, fraud detection
- **RDBMS vs NoSQL Trade-offs:**
	- ****: Schema | **RDBMS**: Rigid, predefined | **NoSQL**: Flexible / schema-less
	- ****: Consistency | **RDBMS**: Strong (ACID) | **NoSQL**: Eventual (BASE)
	- ****: Scalability | **RDBMS**: Vertical (scale-up) | **NoSQL**: Horizontal (scale-out)
	- ****: Query | **RDBMS**: Rich SQL joins | **NoSQL**: Limited; model-specific
- *Note*: BASE Principle (NoSQL) Basically Available — Asoft state — Eventually consistent. Trades strong consistency for availability and partition tolerance (CAP theorem).

## Key Terms & Quick Review — Chapter 14


---

# Chapter XV: Data Compression

## Compression Concepts

**Key insight:** ==Compression = removing redundancy== from data without (or with limited) loss of information

- **Lossless vs Lossy:**
	- **Property**: Reconstruction | **Lossless**: Exact / perfect | **Lossy**: Approximate
	- **Property**: Reversible? | **Lossless**: Yes | **Lossy**: No
	- **Property**: Typical ratio | **Lossless**: 2:1 – 8:1 | **Lossy**: 10:1 – 100:1
	- **Property**: Use cases | **Lossless**: Text, executables, medical | **Lossy**: Audio, video, photos
	- **Property**: Examples | **Lossless**: ZIP, PNG, FLAC, LZW | **Lossy**: JPEG, MP3, MPEG, AAC
- **Compression Ratio & Redundancy:**
- `Ratio = size_original / size_compressed Redundancy = 1 − (1 / Ratio) Example: 1000 B → 250 B Ratio = 4:1, Redundancy = 75%`
- **Types of Redundancy:**
	- Spatial (data) redundancy — repeated patterns within a single image or file
	- Temporal redundancy — similar content across consecutive video frames
	- Coding redundancy — fixed-length codes for symbols of unequal probability
	- Perceptual redundancy — details imperceptible to human senses (hearing, vision)
- **Entropy — Theoretical Limit:**
- `H = −Σ p_i · log₂(p_i) [bits per symbol] Lower entropy → more predictable data → more compressible Max entropy (uniform dist.) → least compressible`
- *Note*: Real-World Applications File archiving (ZIP/gzip), image formats (PNG, JPEG, GIF, WebP), video streaming (H.264, H.265, AV1), audio distribution (MP3, AAC, FLAC), network packet compression, database storage.

## Run-Length Encoding (RLE)

**Key insight:** ==Replace runs of identical== symbols with (count, symbol) pairs — O(n) time and space

- **Encoding Algorithm:**
	- Read input symbol by symbol; initialise count = 1
	- If next symbol equals current symbol: count++
	- Else: emit (count, symbol) pair; reset count = 1; update current symbol
	- On end of input: emit final (count, symbol) pair
- **Worked Example — Text:**
- `Input: A A A B B C C C C D D Output: 3A 2B 4C 2D Saving: 11 symbols → 8 values (4 pairs × 2 fields)`
- **Binary Image Example (Fax Line):**
- `Pixels: 0 0 0 0 1 1 0 1 1 1 1 0 Runs: 4-white, 2-black, 1-white, 4-black, 1-white Encoded: [4, 2, 1, 4, 1] (5 values vs. 12 pixels)`
- **Best vs Worst Cases:**
	- **Case**: Best | **Input (n symbols)**: AAAAAAAA (8) | **Output**: 8A → 2 fields | **Effect**: 4× reduction
	- **Case**: Worst | **Input (n symbols)**: ABCDEFGH (8) | **Output**: 1A1B1C1D1E1F1G1H | **Effect**: 2× expansion!
	- **Case**: Typical | **Input (n symbols)**: Mixed runs | **Output**: Moderate savings | **Effect**: 1.5–5× ratio
- *Note*: Real-World Uses Group 3/4 fax (ITU T.4 / T.6), Windows BMP (BI_RLE8/BI_RLE4 modes), PCX graphics, TIFF optional mode, PostScript, early game sprites.

## Huffman Coding

**Key insight:** ==Assign shorter bit-strings to== more-frequent symbols — provably optimal among prefix codes

- **Building the Huffman Tree — Step by Step:**
	- Count frequency of every distinct symbol; create one leaf node per symbol
	- Insert all nodes into a min-priority queue sorted by frequency
	- Dequeue the two nodes with the lowest frequencies
	- Create an internal node whose frequency = sum of the two children
	- Enqueue the new internal node back into the priority queue
	- Repeat steps 3–5 until exactly one node remains — this is the root
	- Assign codes: traverse left edge → append 0, right edge → append 1
- **Worked Example — Input "AABCDDDD":**
- `Symbol freqs: A=2 B=1 C=1 D=4 Step 1: combine lowest B(1) + C(1) → BC(2) Step 2: combine BC(2) + A(2) → BCA(4) Step 3: combine BCA(4) + D(4) → root(8) Codes: D → 0 A → 10 B → 110 C → 111`
	- **Symbol**: D | **Freq**: 4 | **Code**: 0 | **Code len**: 1 | **Bits used**: 4 × 1 = 4
	- **Symbol**: A | **Freq**: 2 | **Code**: 10 | **Code len**: 2 | **Bits used**: 2 × 2 = 4
	- **Symbol**: B | **Freq**: 1 | **Code**: 110 | **Code len**: 3 | **Bits used**: 1 × 3 = 3
	- **Symbol**: C | **Freq**: 1 | **Code**: 111 | **Code len**: 3 | **Bits used**: 1 × 3 = 3
- **Decoding Example:**
- `Bitstream: 0 10 110 111 → D A B C (read left-to-right, match codes greedily)`
- *Note*: Prefix-Free (Prefix Code) Property No codeword is a prefix of another. This guarantees unambiguous decoding: traverse the tree bit-by-bit and emit a symbol whenever a leaf is reached.

## LZW Compression

**Key insight:** ==Dictionary grows automatically during encoding== - no pre-scan and no transmitted dictionary

- **Encoding Algorithm:**
	- Initialise dictionary with every single-character string (entries 0 … 255 for ASCII)
	- Set working string W = "" (empty)
	- Read next input character K; form candidate W + K
	- If W + K exists in dictionary → set W = W + K and go to step 3
	- Else → output code for W; add W + K to dictionary; set W = K; go to step 3
	- End of input: output code for current W
- **Encoding Trace — "AABABABA":**
- `Init: A=0, B=1 W=A; K=A → AA∉dict → out 0, add AA=2, W=A W=A; K=B → AB∉dict → out 0, add AB=3, W=B W=B; K=A → BA∉dict → out 1, add BA=4, W=A W=A; K=B → AB∈dict(3) → W=AB W=AB;K=A → ABA∉dict → out 3, add ABA=5, W=A W=A; K=B → AB∈dict(3) → W=AB W=AB;K=A → ABA∈dict(5) → W=ABA [end of input] Final out: 5 Compressed codes: [0, 0, 1, 3, 5] (5 codes vs. 8 chars)`
- **Decoding:**
- *Note*: Self-Synchronising Decoder The decoder reconstructs the exact same dictionary from the code stream alone. No dictionary needs to be sent with the compressed file.
- **Applications:**
	- GIF — 8-bit palette images; uses 9–12-bit LZW codes; Unisys patent expired 2003/2004
	- TIFF — LZW is one of several optional compression modes
	- PDF — LZWDecode filter for compressing stream objects
	- Unix compress — classic .Z files; 16-bit LZW variant

## Lossy Compression — JPEG & MPEG

- *Note*: Irreversible Once lossy compression is applied, the original data cannot be recovered. Data is permanently discarded to achieve high compression ratios.
- **JPEG Encoding Pipeline:**
	- Color space conversion: RGB → YCbCr; chroma channels subsampled 4:2:0 (human eyes less sensitive to color than luminance)
	- Block partition: image divided into non-overlapping 8×8 pixel blocks
	- DCT (Discrete Cosine Transform): each block mapped to 64 frequency coefficients; DC = average, AC = detail
	- Quantization: each coefficient divided by a value from a quality-dependent quantization table, then rounded — this is the lossy step that discards high-frequency detail
	- Zigzag scan: reorder 8×8 coefficient matrix into 1-D sequence; low-freq first, trailing zeros grouped at end
	- Entropy coding: RLE for runs of AC zeros + Huffman coding of remaining non-zero values
- **JPEG Quality vs. Size:**
	- **Quality**: 90–100 | **Approx. Ratio**: ~3:1 | **Typical Use**: Medical, archival photography
	- **Quality**: 60–80 | **Approx. Ratio**: ~10:1 | **Typical Use**: General web photos
	- **Quality**: 20–40 | **Approx. Ratio**: ~30:1 | **Typical Use**: Thumbnails, rough preview
- **MPEG — Motion Video Compression:**
- `Frame types: I-frame (Intra-coded) — full JPEG-like snapshot; self-contained P-frame (Predicted) — encodes difference from nearest prior I/P frame B-frame (Bi-directional) — differences from prior AND future I/P frames Typical GOP: I B B P B B P B B I (Group of Pictures)`
	- Motion estimation: finds best-matching block in reference frame; only residual error coded
	- Temporal redundancy: consecutive frames share ≫90% pixel content — P/B frames are tiny
	- B-frames require future reference → encoding order ≠ display order
	- Seeking requires decoding the entire preceding GOP to reach a P or B frame

## Audio & Video Compression Standards

**Key insight:** ==Audio codecs exploit psychoacoustic== masking to discard inaudible data

- **PCM — Uncompressed Baseline:**
- `CD Audio: 44,100 Hz × 16 bits × 2 ch = 1,411,200 bps ≈ 1.4 Mbps → ~10 MB/minute per channel`
- **MP3 — MPEG-1 Audio Layer III:**
	- Sub-band filter bank: split audio into 32 equal-width frequency sub-bands
	- Psychoacoustic model: for each band compute masking threshold
	- Bit allocation: assign more bits to audible, less-masked bands; zero bits to fully masked bands
	- MDCT: Modified DCT applied per sub-band for finer frequency resolution (18 coefficients per band)
	- Huffman encoding: lossless stage compresses the quantized MDCT coefficients
- *Note*: Psychoacoustic Masking Effects Simultaneous masking: a loud tone masks quieter tones at nearby frequencies at the same instant. Temporal (pre/post) masking: loud sound masks quieter sounds up to ~200 ms before and ~500 ms after it occurs.
- **AAC — Advanced Audio Coding (MPEG-4):**
	- Successor to MP3; same bit rate → noticeably higher perceptual quality
	- Larger transform window (1024 vs. 576 MDCT coefficients) → better frequency resolution
	- Supports up to 48 full-bandwidth channels; used in YouTube, iTunes, iOS, Android
	- Variants: AAC-LC (low-complexity), HE-AAC (spectral band replication for very low bitrates)
- **Video Standards at a Glance:**
	- **Standard**: H.264 | **Also Called**: MPEG-4 AVC | **Key Use**: Blu-ray, streaming, Zoom | **Savings vs MPEG-2**: ~2×
	- **Standard**: H.265 | **Also Called**: HEVC | **Key Use**: 4K UHD, HEIF | **Savings vs MPEG-2**: ~4×
	- **Standard**: VP9 | **Also Called**: — | **Key Use**: YouTube (royalty-free) | **Savings vs MPEG-2**: ~2×
	- **Standard**: AV1 | **Also Called**: — | **Key Use**: Web streaming (open) | **Savings vs MPEG-2**: ~4–5×

## Key Terms & Quick Review


---

# Chapter XVI: Security

## Security Goals

**Key insight:** ==CIA Triad==: Confidentiality + Integrity + Availability — the three pillars of information security

- **CIA Triad:**
	- Confidentiality: prevent unauthorized disclosure of data; enforced by encryption, access controls
	- Integrity: protect data from unauthorized modification; enforced by hash functions, MACs
	- Availability: guarantee timely access to resources; protected against DoS attacks
- **Additional Security Goals:**
	- Authentication: verify identity of a user or system before granting access
	- Non-repudiation: sender cannot later deny sending a message; achieved via digital signatures
	- Access Control: determine what an authenticated entity is allowed to do (read, write, execute)
- **Attack Categories (Forouzan):**
	- **Attack**: Interception | **Target**: Confidentiality | **CIA Impact**: C ↓
	- **Attack**: Modification | **Target**: Integrity | **CIA Impact**: I ↓
	- **Attack**: Fabrication | **Target**: Authenticity | **CIA Impact**: A/I ↓
	- **Attack**: Interruption | **Target**: Availability | **CIA Impact**: A ↓
- *Note*: Passive vs. Active Attacks Passive (interception): hard to detect, attacker only observes — focus on prevention. Active (modification, fabrication, interruption): detectable in principle — focus on detection & recovery.
- **Access Control Models:**
	- DAC: owner controls access to their own objects; common in desktop OSes (file permissions)
	- MAC: OS enforces labels (Top Secret, Secret); users cannot override; used in military/government
	- RBAC: permissions tied to roles (admin, editor, viewer); user inherits role permissions; most common enterprise model
	- ABAC: fine-grained; policies use attributes (department=HR, clearance≥3, time<17:00)
- **Security Policy Principles:**
	- Least Privilege: grant only the minimum permissions needed to perform a task
	- Separation of Duties: require multiple people to complete sensitive operations
	- Need to Know: access granted only if the entity has legitimate need for the information
	- Fail-Safe Defaults: default to denial; access requires explicit grant, not explicit deny

## Symmetric Encryption

**Key insight:** ==Symmetric: same secret key== used for both encryption and decryption — fast but requires secure key distribution

- **Core Concept:**
- `C = E(K, P) P = D(K, C)`
- *Note*: C = ciphertext, P = plaintext, K = key, E = encrypt, D = decrypt
- **DES — Data Encryption Standard:**
	- Block cipher; block size = 64 bits; key = 56 bits (+ 8 parity bits = 64-bit key input)
	- 16 rounds of Feistel network; published as FIPS in 1977
	- Now considered insecure: 56-bit key exhaustively searchable; broken in 1999
	- 3DES: applies DES three times with 2 or 3 distinct keys; effective key 112/168 bits
- **AES — Advanced Encryption Standard:**
	- Block size: 128 bits (fixed); key sizes: 128 / 192 / 256 bits
	- Substitution-permutation network; 10/12/14 rounds depending on key length
	- Adopted as FIPS 197 in 2001; currently the gold standard for symmetric encryption
- **Modes of Operation:**
	- **Mode**: ECB | **Stands for**: Electronic Code Book | **Notes**: Each block encrypted independently — insecure, patterns visible
	- **Mode**: CBC | **Stands for**: Cipher Block Chaining | **Notes**: Each block XOR'd with previous ciphertext; needs IV; sequential
	- **Mode**: CFB | **Stands for**: Cipher FeedBack | **Notes**: Turns block cipher into stream cipher; error propagates
	- **Mode**: CTR | **Stands for**: Counter | **Notes**: Generates keystream from counter; parallelizable; no padding needed
- **Authenticated Encryption (AEAD):**
	- AEAD combines encryption and authentication in one pass; prevents padding oracle attacks
	- GCM (Galois/Counter Mode): AES-GCM is the most widely deployed AEAD mode; produces ciphertext + auth tag
	- CCM: Counter with CBC-MAC; used in WPA2 / 802.11i wireless security
	- ChaCha20-Poly1305: stream-cipher-based AEAD; used in TLS 1.3 and mobile/IoT where AES hw acceleration unavailable
- **Symmetric Key Management:**
	- Key Derivation Function (KDF): derive multiple subkeys from a master secret (HKDF, PBKDF2, bcrypt)
	- Key Wrapping: encrypt one key with another key for secure storage/transport (AES Key Wrap, RFC 3394)
	- Session Keys: ephemeral keys used for one session only; limit exposure if one key is compromised
	- HSM (Hardware Security Module): tamper-resistant hardware that stores and uses keys; keys never leave the HSM in plaintext

## Asymmetric Encryption

**Key insight:** ==Asymmetric (public-key)==: key pair — public key encrypts, private key decrypts; eliminates secret key distribution problem

- **Key Pair Concept:**
	- Public key: freely distributed; anyone may use it to encrypt data for the owner
	- Private key: kept secret by owner; used to decrypt messages encrypted with public key
	- Computationally infeasible to derive private key from public key
	- Trade-off: much slower than symmetric encryption (100–1000×); used for key exchange or small data
- **RSA Algorithm:**
- `n = p × q ϕ(n) = (p−1)(q−1) e·d ≡ 1 (mod ϕ(n))`
	- Key generation: choose large primes p, q; compute n = pq; choose e coprime to ϕ(n); compute d = e⁻¹ mod ϕ(n). Public key = (e, n), private key = (d, n)
	- Encryption: C = Mᵉ mod n (using recipient's public key)
	- Decryption: M = Cᵈ mod n (using recipient's private key)
- *Note*: RSA Security Basis Security relies on the integer factorization problem: it is easy to multiply two large primes but computationally hard to factor their product. Recommended key size ≥ 2048 bits today.
- **Diffie-Hellman Key Exchange:**
- `A = gᵃ mod p B = gᵇ mod p Shared = Bᵃ mod p = Aᵇ mod p`
	- Allows two parties to agree on a shared secret over a public channel without transmitting the secret
	- Security based on the discrete logarithm problem
	- Does not provide authentication — vulnerable to MITM without additional authentication
- **Use Cases for Asymmetric Cryptography:**
	- Key distribution: securely deliver a symmetric session key (hybrid encryption)
	- Digital signatures: sign with private key, verify with public key
	- Authentication: prove identity without revealing the private key
	- Certificates: bind a public key to an identity via a trusted CA signature
- **Elliptic Curve Cryptography (ECC):**
- `y² = x³ + ax + b (mod p) — points form an abelian group under chord-and-tangent addition`
	- Security based on the elliptic curve discrete logarithm problem (ECDLP) — harder than integer DLP
	- Achieves equivalent security to RSA with much shorter keys: ECC 256-bit ≈ RSA 3072-bit
	- Key algorithms: ECDH (key exchange), ECDSA (digital signatures), ECIES (encryption)
	- Used in TLS 1.3, Bitcoin, modern PKI; preferred over RSA for new systems
- **Key Size Equivalence Guide:**
	- **Symmetric**: 80-bit | **RSA / DH**: 1024-bit | **ECC**: 160-bit | **Security Level**: Inadequate (legacy)
	- **Symmetric**: 112-bit | **RSA / DH**: 2048-bit | **ECC**: 224-bit | **Security Level**: Transitional
	- **Symmetric**: 128-bit | **RSA / DH**: 3072-bit | **ECC**: 256-bit | **Security Level**: Current standard
	- **Symmetric**: 256-bit | **RSA / DH**: 15360-bit | **ECC**: 512-bit | **Security Level**: Post-quantum future

## Hash Functions & Digital Signatures

**Key insight:** ==Hash: fixed-size digest of== arbitrary input — one-way, deterministic, collision-resistant; used to verify integrity

- **Common Hash Algorithms:**
	- **Algorithm**: MD5 | **Output**: 128 bits | **Status**: Broken (collisions) — legacy only
	- **Algorithm**: SHA-1 | **Output**: 160 bits | **Status**: Deprecated — collisions found 2017
	- **Algorithm**: SHA-256 | **Output**: 256 bits | **Status**: Secure — current standard
	- **Algorithm**: SHA-3 | **Output**: 224–512 bits | **Status**: Secure — backup to SHA-2
- **Required Properties of a Cryptographic Hash:**
	- One-way (preimage resistance): given H(M), cannot recover M in feasible time
	- Second preimage resistance: given M, cannot find M′ ≠ M such that H(M) = H(M′)
	- Collision resistance: computationally infeasible to find any M, M′ where H(M) = H(M′)
	- Deterministic: same input always produces same digest
	- Avalanche effect: small change in input produces drastically different digest
- **Digital Signature Process:**
	- Hash the message: sender computes H(M) using agreed hash algorithm
	- Sign the hash: sender encrypts H(M) with their private key → digital signature S
	- Transmit: send message M + signature S together
	- Verify: receiver computes H(M) independently, then decrypts S with sender's public key to get H′(M); if H = H′, signature is valid
- *Note*: What Digital Signatures Provide Authentication (proves sender identity) · Integrity (message not tampered) · Non-repudiation (sender cannot deny). They do not provide confidentiality by themselves.
- **Digital Certificates:**
	- Bind a public key to a verified identity, signed by a trusted CA
	- Format: X.509; contains subject name, public key, issuer CA, validity period, serial number
	- Chain of trust: end-entity cert → intermediate CA → root CA (pre-installed in OS/browser)
- **HMAC — Keyed Hash for Authentication:**
- `HMAC(K, M) = H((K⊕opad) ‖ H((K⊕ipad) ‖ M))`
	- HMAC uses a secret key combined with a hash function; provides both integrity and authentication
	- Unlike a plain hash, HMAC is unforgeable without the secret key — resistant to length-extension attacks
	- Common instances: HMAC-SHA-256, HMAC-SHA-512
	- Used in TLS record layer, JWT tokens, API authentication (AWS Signature v4)
	- Difference from digital signature: HMAC is symmetric (shared key) — both parties can verify and forge, so no non-repudiation

## Network Security

**Key insight:** ==Network security==: protect data in transit and control access to networked resources using multiple layered controls

- **Firewalls:**
	- **Type**: Packet Filter | **OSI Layer**: 3 / 4 | **Inspects**: IP headers, ports, protocol
	- **Type**: Stateful Inspection | **OSI Layer**: 3 / 4 | **Inspects**: Packet + connection state table
	- **Type**: Application-Layer | **OSI Layer**: 7 | **Inspects**: Full payload; deep packet inspection
- **VPN — Virtual Private Network:**
	- Creates an encrypted tunnel over a public network (Internet)
	- Protocols: IPSec, SSL/TLS, WireGuard, PPTP (obsolete)
	- Provides confidentiality, integrity, and authentication for network traffic
- **SSL/TLS Handshake (Simplified):**
	- ClientHello: client sends supported cipher suites, TLS version, random nonce
	- ServerHello + Certificate: server chooses cipher, sends X.509 cert with public key
	- Key Exchange: client verifies cert, generates/exchanges pre-master secret (RSA or DH)
	- Session Keys Derived: both sides derive symmetric session keys from master secret
	- Finished: both sides confirm handshake with MAC; encrypted communication begins
- **IPSec:**
	- Network-layer security protocol suite; operates at IP layer (Layer 3)
	- AH (Authentication Header): integrity + authentication, no encryption
	- ESP (Encapsulating Security Payload): encryption + integrity + authentication
	- Transport mode: protects payload only; Tunnel mode: protects entire IP packet (used in VPNs)
- **Common Network Attacks:**
	- DDoS: overwhelm target with traffic from botnet; mitigated by rate limiting, scrubbing centers
	- MITM: attacker positions between client and server; defeated by mutual authentication + TLS
	- Phishing: social engineering via deceptive email/site to steal credentials
	- SQL Injection: malicious SQL in input fields; defeated by parameterized queries
	- XSS: inject scripts into web pages; defeated by input sanitization and CSP headers
	- Replay Attack: re-send captured valid credentials/tokens; defeated by nonces and timestamps
- *Note*: Defense in Depth No single control is sufficient. Layer firewalls, IDS/IPS, encryption, authentication, patching, and user training. Each layer must assume the previous layer can be breached.
- **Public Key Infrastructure (PKI):**
	- CA (Certificate Authority): trusted entity that signs certificates; root CAs pre-installed in browsers/OS
	- RA (Registration Authority): verifies identity of certificate applicants before CA issues cert
	- CRL (Certificate Revocation List): list of revoked certificates published by CA; checked before trusting a cert
	- OCSP: Online Certificate Status Protocol — real-time revocation check; faster than downloading full CRL
	- Certificate Pinning: application hard-codes expected cert or public key; prevents MITM via rogue CA
- **TLS Version History:**
	- **Version**: SSL 3.0 | **Year**: 1996 | **Status**: Deprecated | **Key Change**: POODLE attack; RC4 issues
	- **Version**: TLS 1.0/1.1 | **Year**: 1999/2006 | **Status**: Deprecated (2020) | **Key Change**: BEAST, CRIME attacks
	- **Version**: TLS 1.2 | **Year**: 2008 | **Status**: Acceptable | **Key Change**: GCM modes, SHA-256; still widely used
	- **Version**: TLS 1.3 | **Year**: 2018 | **Status**: Recommended | **Key Change**: 0-RTT, ECDHE only, removed weak ciphers

## Malware & Threats

**Key insight:** ==Malware: malicious software designed== to disrupt, damage, or gain unauthorized access to systems

- **Malware Types:**
	- **Type**: Virus | **Spreads via**: Infected files | **Payload / Goal**: Data corruption, resource consumption; requires user action to spread
	- **Type**: Worm | **Spreads via**: Network (auto) | **Payload / Goal**: Network congestion, drops payloads; no host file needed
	- **Type**: Trojan | **Spreads via**: Social engineering | **Payload / Goal**: Backdoor access, data theft; does not self-replicate
	- **Type**: Ransomware | **Spreads via**: Email / exploit | **Payload / Goal**: Encrypt files; extort payment (e.g., WannaCry, CryptoLocker)
	- **Type**: Spyware | **Spreads via**: Bundled software | **Payload / Goal**: Keylogging, screen capture, credential theft
	- **Type**: Rootkit | **Spreads via**: Privilege escalation | **Payload / Goal**: Persistent stealth; hides processes, files, network activity
	- **Type**: Botnet | **Spreads via**: Trojan / worm | **Payload / Goal**: DDoS, spam relay, cryptocurrency mining
- **Intrusion Detection Systems (IDS):**
	- Signature-based: match traffic/behavior against known attack patterns (fast, but misses zero-days)
	- Anomaly-based: detect deviations from learned baseline; catches novel attacks but high false-positive rate
	- IDS vs. IPS: IDS detects and alerts; IPS (Intrusion Prevention System) also blocks in real time
	- Host-based (HIDS): monitors a single host's logs and system calls
	- Network-based (NIDS): monitors network traffic at a sensor or tap point
- **Social Engineering:**
	- Manipulating people rather than systems to obtain credentials or access
	- Phishing: mass deceptive emails; Spear phishing: targeted to specific individual
	- Pretexting: fabricated scenario (fake IT helpdesk) to extract information
	- Baiting: leave infected USB drives in public locations
	- Tailgating: physically follow an authorized person into a secured area
- *Note*: Human Factor Over 80% of breaches involve a human element (phishing, misuse, errors). Technical controls must be complemented by user security awareness training and strong organizational policies.
- **Vulnerability Classes:**
	- **Vulnerability**: Buffer Overflow | **Description**: Write past array end; overwrite stack/heap | **Prevention**: Bounds checking, ASLR, NX bit, safe languages
	- **Vulnerability**: SQL Injection | **Description**: Malicious SQL in input alters DB query | **Prevention**: Parameterized queries, prepared statements
	- **Vulnerability**: XSS | **Description**: Scripts injected into web pages | **Prevention**: Input validation, output encoding, CSP
	- **Vulnerability**: CSRF | **Description**: Forged requests using victim's session | **Prevention**: CSRF tokens, SameSite cookies
	- **Vulnerability**: Zero-Day | **Description**: Unknown flaw; no patch available | **Prevention**: Defence in depth, anomaly detection
- **Security Response Lifecycle:**
	- Identify: discover vulnerability via pen-testing, bug bounty, or CVE disclosure
	- Contain: isolate affected systems to prevent lateral movement
	- Eradicate: remove malware, patch vulnerability, revoke compromised credentials
	- Recover: restore systems from clean backups; verify integrity
	- Lessons Learned: document incident; update policies and controls

## Key Terms & Quick Review


---

# Chapter XVII: Theory of Computation

## Languages & Grammars

**Key insight:** ==A language is a== set of strings over an alphabet; a grammar defines which strings belong to the language.

- **Core Definitions:**
	- Alphabet (Σ): finite set of symbols
	- String: finite sequence of symbols from Σ; empty string = ε
	- Language (L): any subset of Σ* (all possible strings over Σ)
	- Σ*: Kleene closure — all strings including ε
	- Concatenation: xy joins string x and string y
- **Chomsky Hierarchy:**
	- **Type**: Type 0 | **Grammar**: Unrestricted | **Automaton**: Turing Machine
	- **Type**: Type 1 | **Grammar**: Context-Sensitive | **Automaton**: Linear-Bounded
	- **Type**: Type 2 | **Grammar**: Context-Free | **Automaton**: Pushdown Automaton
	- **Type**: Type 3 | **Grammar**: Regular | **Automaton**: Finite Automaton
- *Note*: Hierarchy Inclusion Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursively Enumerable. Each class is a strict subset of the one above it.
- **Production Rules:**
- `Type 3 (Regular): A → aB or A → a (right-linear) Type 2 (CFG): A → α (A single variable; α any string) Type 1 (CSG): αAβ → αγβ (|γ| ≥ 1) Type 0: α → β (no restriction)`
- **String Operations:**
	- **Operation**: Length | **Notation**: |w| | **Example (Σ={a,b})**: |abb| = 3
	- **Operation**: Concatenation | **Notation**: xy | **Example (Σ={a,b})**: ab · ba = abba
	- **Operation**: Reversal | **Notation**: wR | **Example (Σ={a,b})**: (abc)R = cba
	- **Operation**: Power | **Notation**: wk | **Example (Σ={a,b})**: a3 = aaa
	- **Operation**: Prefix / Suffix | **Notation**: x is prefix if y, xy=w | **Example (Σ={a,b})**: ab is prefix of abba

## Finite Automata & Regular Languages

**Key insight:** ==A DFA accepts exactly== the class of regular languages; every NFA has an equivalent DFA.

- **DFA Formal Definition:**
	- Q: finite set of states
	- Σ: input alphabet
	- δ: Q × Σ → Q: transition function
	- q0 ∈ Q: start (initial) state
	- F ⊆ Q: set of accept (final) states
- **Acceptance Criterion:**
- `M accepts w = a1 a2 ... an iff r0=q0, ri+1 = δ(ri, ai+1), rn ∈ F`
- **NFA vs DFA:**
	- **Property**: Transitions per input | **DFA**: Exactly 1 | **NFA**: 0, 1, or many
	- **Property**: ε-transitions | **DFA**: No | **NFA**: Yes
	- **Property**: Expressive power | **DFA**: Regular | **NFA**: Regular
	- **Property**: State count (worst) | **DFA**: 2n | **NFA**: n
- *Note*: NFA to DFA (Subset Construction) Each DFA state = a set of NFA states. Worst case: exponential blowup, but both recognise the same class.
- **Regular Expressions:**
	- ∅ = empty language; ε = empty string
	- a = language {a} for each a ∈ Σ
	- R1 | R2 = union; R1R2 = concatenation
	- R* = Kleene star (zero or more repetitions)
- **DFA Minimisation (Myhill-Nerode):**
	- Table-filling algorithm marks distinguishable pairs bottom-up
	- Merge all pairs of unmarked (equivalent) states
	- Result: unique (up to isomorphism) minimal DFA

## Pushdown Automata & CFGs

**Key insight:** ==A PDA is a== finite automaton augmented with an unbounded stack; it recognises exactly the context-free languages.

- **PDA Formal Definition:**
	- Γ: stack alphabet
	- δ: Q × Σε × Γε → P(Q × Γε): transition relation
	- Reads input symbol, pops stack symbol, pushes new string, transitions state
- **Context-Free Grammar (CFG):**
- *Note*: G = (V, T, S, P) where every production has form A → α with A ∈ V and α ∈ (V ∪ T)*.
- `Classic CFG: balanced parentheses S → SS | (S) | ε Palindromes over {a,b}: S → aSa | bSb | a | b | ε`
- **Parse Trees:**
	- Root = start symbol; leaves = terminals; interior = variables
	- Yield of tree = concatenation of leaves (left to right)
	- Ambiguity: a grammar is ambiguous if some string has two or more distinct parse trees
- **Closure Properties of CFLs:**
	- Closed under: union, concatenation, Kleene star, reversal
	- NOT closed under: intersection, complement
- **Normal Forms for CFGs:**
	- Chomsky Normal Form (CNF): every production is A → BC or A → a. Any CFG can be converted to CNF; required for CYK.
	- Greibach Normal Form (GNF): every production is A → aα where a is a terminal. Useful for constructing PDAs; guarantees each step consumes one input symbol.

## Turing Machines

**Key insight:** ==A Turing Machine is== the most powerful computational model; defines the boundary of what is algorithmically solvable.

- **Formal Definition:**
	- Q: finite set of states
	- Σ: input alphabet (blank symbol _ ∉ Σ)
	- Γ ⊇ Σ: tape alphabet (includes blank)
	- δ: Q × Γ → Q × Γ × {L, R}: transition function
	- q0: start state; qacc: accept; qrej: reject
- **Configuration & Computation:**
- `Configuration: (q, tape_contents, head_position) Written as: uqv where u = left of head, q = current state, v = right of head Yields: C1 |- C2 (single step) Accept: C0 |-* Cacc (any number of steps)`
- **Halting & Behaviour:**
	- Accept: enters qacc — computation terminates, input accepted
	- Reject: enters qrej — computation terminates, input rejected
	- Loop: computation never terminates (infinite loop)
- *Note*: Church-Turing Thesis Every effectively computable function is computable by a Turing Machine. This is a thesis, not a theorem — it cannot be formally proved, but no counterexample has ever been found.
- **TM Variants (all equivalent):**
	- **Variant**: Multi-tape TM | **Description**: k independent tapes; simulated by 1-tape TM with O(t2) overhead
	- **Variant**: Non-deterministic TM | **Description**: Multiple transitions allowed; accepts if any branch accepts
	- **Variant**: Enumerator | **Description**: Prints (enumerates) all strings in a language
	- **Variant**: Oracle TM | **Description**: Has access to a black-box oracle for some language
- **Universal Turing Machine (UTM):**
- `U(<M, w>) = M(w) Accepts iff M accepts w Rejects iff M rejects w Loops iff M loops on w`

## Decidability

**Key insight:** ==The Halting Problem is undecidable==: no TM can determine for all (M, w) pairs whether M halts on w.

- **Language Classes:**
	- **Class**: Decidable | **Also Called**: Recursive | **Description**: TM always halts with accept or reject
	- **Class**: Recognisable | **Also Called**: R.E. / Σ1 | **Description**: TM accepts members; may loop on non-members
	- **Class**: Co-R.E. | **Also Called**: Π1 | **Description**: Complement is recognisable
	- **Class**: Undecidable | **Also Called**: — | **Description**: No TM decides the language
- **The Halting Problem (HP):**
- `Proof by diagonalisation (Turing, 1936): Assume decider H exists for A_TM. Build D: on input <M>: run H on <M, <M>> if H accepts -> D REJECTS if H rejects -> D ACCEPTS Run D on <D>: D accepts <D> iff D rejects <D> -- contradiction!`
- *Note*: Undecidable Problems Halting Problem, emptiness of TM language, equivalence of two TMs, Post Correspondence Problem (PCP), 10th Hilbert Problem. None can be decided by any algorithm.
- **Reductions:**
	- If B is decidable and A ≤m B, then A is decidable
	- If A is undecidable and A ≤m B, then B is undecidable
- **Rice's Theorem:**
- **Semi-Decidable Languages:**
	- L is semi-decidable (r.e.) iff a TM enumerates L or recognises L
	- L is decidable iff both L and its complement are recognisable
- **Decidable Problems (examples):**
	- ADFA: does DFA M accept string w? — simulate M on w
	- EDFA: is the language of DFA M empty? — reachability from start state
	- EQDFA: do two DFAs recognise the same language?
	- ACFG: does CFG G generate string w? — use CYK
	- ECFG: is the language of CFG G empty? — variable reachability

## Complexity Classes — P vs NP

**Key insight:** ==P = problems solvable== in polynomial time; NP = problems verifiable in polynomial time. P vs NP is the greatest open problem in CS.

- **Class P:**
	- Reachability in graphs, sorting, shortest paths, primality testing
	- Closed under complement, union, intersection, concatenation
- **Class NP:**
- *Note*: NP = { L | L decided by a NTM in polynomial time } = { L | L has polynomial-time verifier }.
- `Verifier definition: L ∈ NP iff exists poly-time V such that w ∈ L ⇔ exists certificate c, |c|=O(|w|^k), V(<w,c>) accepts`
- **NP-Complete:**
- **Key NP-Complete Problems:**
	- SAT / 3-SAT: satisfiability of propositional formulas / 3-CNF
	- CLIQUE: does G have a k-clique?
	- VERTEX-COVER: cover all edges with k vertices?
	- HAMILTONIAN-PATH: path visiting every vertex once
	- TSP: Traveling Salesman Problem (decision version)
	- SUBSET-SUM: subset summing to target t
- **Polynomial Reduction:**
- `A ≤_p B (poly-time mapping reduction): Computable f in poly time s.t. w ∈ A ⇔ f(w) ∈ B If B ∈ P and A ≤_p B then A ∈ P If A is NP-hard and A ≤_p B then B is NP-hard`
- **Complexity Hierarchy (extended):**
	- **Class**: P | **Description**: Poly-time deterministic | **Example**: Sorting, BFS, primality
	- **Class**: NP | **Description**: Poly-time non-deterministic | **Example**: SAT, Clique, TSP-decision
	- **Class**: PSPACE | **Description**: Poly-space deterministic | **Example**: TQBF (QBF satisfiability)
	- **Class**: EXPTIME | **Description**: Exponential time | **Example**: Generalised chess

## Key Terms & Quick Review


---

# Chapter XVIII: Artificial Intelligence

## AI Fundamentals

**Key insight:** ==AI = the study== and design of intelligent agents that perceive their environment and take actions that maximize the chance of success

- **Definition:**
- **Brief History:**
	- 1950 — Alan Turing proposes the Turing Test as a criterion for machine intelligence
	- 1956 — Dartmouth Conference coins "Artificial Intelligence" as a field
	- 1974–80 — First AI Winter; funding cuts after unmet expectations
	- 1987–93 — Second AI Winter; expert-system limitations exposed
	- 1997 — Deep Blue defeats Kasparov at chess
	- 2012–now — Deep learning renaissance driven by big data and GPUs
- **Strong vs Weak AI:**
	- **Type**: Strong AI | **Description**: General intelligence equal to human cognition | **Status**: Theoretical / not achieved
	- **Type**: Weak AI | **Description**: Specialised system designed for a narrow task | **Status**: Current state of the art
- **Major AI Subfields:**
	- Machine Learning (ML) — systems that improve from experience
	- Natural Language Processing (NLP) — understanding and generating human language
	- Computer Vision — interpreting visual information from images/video
	- Robotics — designing agents that act in the physical world
	- Expert Systems — encoding domain knowledge in rule-based systems
	- Planning & Search — finding sequences of actions to reach a goal
- *Note*: Interdisciplinary Roots AI draws from mathematics, cognitive science, linguistics, psychology, neuroscience, and computer engineering — making it one of the broadest fields in CS.

## Search Algorithms

**Key insight:** ==Search = systematically exploring== a state space to find a goal state or optimal sequence of actions

- **State Space Representation:**
	- State: a configuration of the problem at a given point
	- Initial state: where the search begins
	- Goal state(s): desired configurations
	- Actions / operators: transitions between states
	- Path cost: cumulative cost of reaching a state
- **Uninformed (Blind) Search:**
	- **Algorithm**: BFS | **Strategy**: Level-by-level (FIFO queue) | **Complete?**: Yes | **Optimal?**: Yes (unit cost)
	- **Algorithm**: DFS | **Strategy**: Deepest node first (stack) | **Complete?**: No (loops) | **Optimal?**: No
	- **Algorithm**: Iterative Deepening | **Strategy**: DFS with increasing depth limit | **Complete?**: Yes | **Optimal?**: Yes (unit cost)
	- **Algorithm**: Uniform Cost | **Strategy**: Lowest path cost first | **Complete?**: Yes | **Optimal?**: Yes
- *Note*: Iterative Deepening Key Point Combines BFS's completeness and optimality with DFS's low memory usage — the preferred uninformed strategy for large, unknown search spaces.
- **Informed (Heuristic) Search:**
	- Greedy Best-First — expands node with lowest heuristic h(n); fast but not optimal
	- A* Search — uses f(n) = g(n) + h(n); optimal if h is admissible
- `f(n) = g(n) + h(n) g(n) = cost from start to n h(n) = estimated cost from n to goal`
- **Game Trees & Adversarial Search:**
	- Minimax algorithm — alternates MAX/MIN levels; explores full game tree
	- Alpha-beta pruning — eliminates branches that cannot affect the result; same outcome as minimax with far fewer nodes visited

## Knowledge Representation

**Key insight:** ==Knowledge representation = encoding== real-world knowledge in a form a computer can reason about

- **Propositional Logic:**
	- Decidable — every statement is either true or false
	- Limited expressiveness — cannot quantify over objects
- **Predicate (First-Order) Logic:**
- *Note*: Extends propositional logic with objects, predicates, and quantifiers (∀, ∃).
- `∀x Human(x) → Mortal(x) Human(Socrates) ⊢ Mortal(Socrates)`
- **Inference Rules:**
	- **Rule**: Modus Ponens | **Form**: P, P→Q ⊢ Q | **Meaning**: From P and P implies Q, conclude Q
	- **Rule**: Modus Tollens | **Form**: ¬Q, P→Q ⊢ ¬P | **Meaning**: Contrapositive reasoning
	- **Rule**: Resolution | **Form**: (A∨B), (¬A∨C) ⊢ B∨C | **Meaning**: Core of automated provers
- **Knowledge Base (KB):**
	- Stores facts and rules about a domain in a structured form
	- Inference engine applies rules to derive new knowledge
	- Foundation of expert systems and logic programming (Prolog)
- **Semantic Networks & Frames:**
	- Semantic network — graph of nodes (concepts) and labelled edges (relations, e.g., is-a, has-a)
	- Frames — structured records with slots and values, inspired by Minsky (1975); precursor to object-oriented programming

## Machine Learning

**Key insight:** ==ML = programs that== improve their performance on a task through experience (data), without being explicitly programmed for every case

- **Supervised Learning:**
	- Classification — output is a discrete category (spam/not-spam, image label)
	- Regression — output is a continuous value (house price, temperature forecast)
	- Algorithms: decision trees, k-NN, SVM, logistic regression, random forests
- **Unsupervised Learning:**
- *Note*: Finds hidden structure in unlabelled data.
	- Clustering — groups similar instances (k-means, hierarchical, DBSCAN)
	- Dimensionality reduction — compresses features while preserving structure (PCA, t-SNE, autoencoders)
	- Density estimation — models the underlying data distribution
- **Reinforcement Learning:**
- `Q(s,a) ← Q(s,a) + α[r + γ·max Q(s',a') − Q(s,a)] Q-learning update rule (Bellman equation)`
- **Model Fit:**
	- **Problem**: Overfitting | **Training Error**: Low | **Test Error**: High | **Remedy**: Regularisation, more data, dropout
	- **Problem**: Underfitting | **Training Error**: High | **Test Error**: High | **Remedy**: More complex model, better features
	- **Problem**: Good Fit | **Training Error**: Low | **Test Error**: Low | **Remedy**: —
- **Evaluation Protocol:**
	- Train/Validation/Test split — training tunes weights, validation tunes hyperparameters, test gives final unbiased estimate
	- k-fold cross-validation — partitions data into k subsets; each serves as test set once

## Neural Networks

**Key insight:** ==Neural network = layered== architecture of interconnected computational units (neurons) inspired by the biological brain

- **Biological Inspiration:**
	- Biological neuron: dendrites receive signals → cell body integrates → axon fires output
	- Artificial neuron: weighted inputs → summation → activation function → output
	- Synaptic strength ↔ learned weight parameter
- **Perceptron (Single Neuron):**
- `output = f(w₁x₁ + w₂x₂ + … + wₙxₙ + b) w = weights, x = inputs, b = bias`
- **Multilayer Networks (MLP):**
	- Input layer — receives raw feature values
	- Hidden layer(s) — learn intermediate representations
	- Output layer — produces final prediction
- **Activation Functions:**
	- **Function**: Sigmoid | **Formula**: 1/(1+e⁻ˣ) | **Range**: (0, 1) | **Use Case**: Binary classification output
	- **Function**: tanh | **Formula**: (eˣ−e⁻ˣ)/(eˣ+e⁻ˣ) | **Range**: (−1, 1) | **Use Case**: Hidden layers
	- **Function**: ReLU | **Formula**: max(0, x) | **Range**: [0, ∞) | **Use Case**: Default for deep nets
	- **Function**: Softmax | **Formula**: eˣⁱ / Σeˣʲ | **Range**: (0,1), Σ=1 | **Use Case**: Multi-class output
- **Backpropagation:**
	- Forward pass — compute predictions and loss
	- Compute loss gradient w.r.t. output layer weights
	- Propagate gradients backward through layers (chain rule)
	- Update each weight: w ← w − η·∂L/∂w
- *Note*: Vanishing Gradient Sigmoid/tanh gradients saturate near 0 or 1, causing early layers to learn very slowly in deep networks. ReLU and batch normalisation mitigate this.
- **Deep Learning Overview:**
	- CNN (Convolutional Neural Network) — spatial feature extraction; dominant for images
	- RNN / LSTM — sequential data; handles temporal dependencies
	- Transformer — attention mechanism; state-of-the-art for NLP (BERT, GPT)
	- Requires large datasets, GPU compute, and careful regularisation

## AI Applications

**Key insight:** ==AI transforms raw data== into actionable intelligence across language, vision, autonomous systems, and decision support

- **Natural Language Processing (NLP):**
	- Tokenisation — splitting text into tokens for processing
	- Parsing — analysing grammatical structure (syntax trees)
	- Sentiment analysis — classifying text as positive/neutral/negative
	- Machine translation — seq2seq models (encoder-decoder, Transformer)
	- Question answering — retrieving or generating answers from context
- **Computer Vision:**
	- Image classification — assigning a category label to an entire image
	- Object detection — localising and classifying multiple objects (YOLO, Faster R-CNN)
	- CNNs — hierarchical feature extraction via learned filters
	- Semantic segmentation — pixel-level classification
	- Facial recognition — identity verification from face images
- **Expert Systems:**
	- Encode domain expertise as IF-THEN rules in a knowledge base
	- Inference engine applies forward chaining (data → conclusion) or backward chaining (goal → supporting facts)
	- Examples: MYCIN (medical diagnosis), DENDRAL (chemical analysis)
- **Robotics:**
	- Perception (sensors), planning (path/motion), and actuation (effectors)
	- SLAM — Simultaneous Localisation and Mapping
	- Industrial robots, surgical robots, autonomous vehicles
- **Ethical Concerns:**
- *Note*: Bias & Fairness Models trained on biased data amplify existing societal biases in hiring, lending, and criminal justice applications.

## Key Terms & Quick Review

- **Key Terms:**
	- **Term**: Turing Test | **Definition**: Criterion for intelligence: human evaluator cannot distinguish machine from human in conversation | **Term**: Knowledge Base | **Definition**: Repository of domain facts and rules used by an inference engine to derive conclusions
	- **Term**: Search | **Definition**: Systematic exploration of a state space to find a path or solution to a goal | **Term**: Inference | **Definition**: Process of deriving new knowledge from existing facts and rules (e.g., modus ponens, resolution)
	- **Term**: Heuristic | **Definition**: Problem-specific estimate h(n) guiding informed search; must be admissible for A* optimality | **Term**: Machine Learning | **Definition**: Class of algorithms that improve on a task through experience (data) rather than explicit programming
	- **Term**: Neural Network | **Definition**: Layered architecture of interconnected artificial neurons that learns feature representations from data | **Term**: Backpropagation | **Definition**: Algorithm that propagates the loss gradient backward through a network to update weights via gradient descent
	- **Term**: NLP | **Definition**: Natural Language Processing — AI subfield enabling computers to understand, interpret, and generate human language | **Term**: Computer Vision | **Definition**: AI field enabling machines to interpret images and video; core tasks include classification, detection, and segmentation
	- **Term**: Supervised | **Definition**: Learning from labelled data; maps inputs to known outputs (classification and regression) | **Term**: Unsupervised | **Definition**: Learning hidden structure in unlabelled data; includes clustering and dimensionality reduction
	- **Term**: Reinforcement | **Definition**: Learning a policy by maximising cumulative reward through environment interaction (agent, state, action, reward) | **Term**: Deep Learning | **Definition**: Subset of ML using networks with many hidden layers to learn hierarchical representations; powers modern AI breakthroughs
	- **Term**: Expert System | **Definition**: Rule-based system encoding domain expertise; uses forward/backward chaining to reach conclusions | **Term**: Overfitting | **Definition**: Model memorises training noise; high train accuracy, poor generalisation — remedied by regularisation and more data
- **Quick Review:**

---

# Chapter XIX: Social Media

## Social Networks

**Key insight:** ==Social network = graph== G(V, E) where V = users (nodes) and E = relationships (edges)

- **Graph Model:**
	- **Element**: Node (vertex) | **Meaning**: User / entity | **Example**: Person, page, group
	- **Element**: Edge (link) | **Meaning**: Relationship | **Example**: Friendship, follow, like
	- **Element**: Weight | **Meaning**: Interaction strength | **Example**: Message frequency
	- **Element**: Directed edge | **Meaning**: Asymmetric tie | **Example**: Twitter follow
	- **Element**: Undirected edge | **Meaning**: Mutual tie | **Example**: Facebook friend
- **Directed vs Undirected:**
	- Undirected: edge (u, v) = edge (v, u) — friendship is mutual (Facebook, LinkedIn)
	- Directed: edge (u → v) ≠ edge (v → u) — follower/followee (Twitter/X, Instagram)
	- In-degree: number of incoming edges to a node (followers)
	- Out-degree: number of outgoing edges from a node (following)
- **Network Properties:**
- `Density = 2|E| / (|V| × (|V|−1)) [undirected] Avg. Path = average shortest path between all pairs Clustering = fraction of node's neighbours that are connected`
	- Small-world phenomenon: average path length ≈ 6 ("six degrees of separation")
	- Clustering coefficient: high in social networks — friends of friends tend to be friends
	- Scale-free networks: degree distribution follows power law; few nodes (hubs) have very high degree
- **Centrality Measures:**
	- **Measure**: Degree centrality | **Meaning**: Number of direct connections | **Use case**: Most-connected user (influencer)
	- **Measure**: Betweenness centrality | **Meaning**: How often node lies on shortest path | **Use case**: Information brokers, bridges
	- **Measure**: Closeness centrality | **Meaning**: Average distance to all others | **Use case**: Fastest spreader of information
	- **Measure**: Eigenvector centrality | **Meaning**: Connected to well-connected nodes | **Use case**: Basis of PageRank
- *Note*: Milgram's Experiment (1967) Stanley Milgram showed letters could reach a target stranger in the US via ~6 intermediaries — experimental basis of the small-world hypothesis.

## Web Technologies

**Key insight:** ==Web stack==: HTML (structure) + CSS (presentation) + JavaScript (behaviour)

- **HTTP Request / Response Cycle:**
	- Client (browser) resolves domain via DNS
	- TCP connection established (3-way handshake)
	- Client sends HTTP GET /path HTTP/1.1 request with headers
	- Server processes request, returns status code + body
	- Browser parses HTML, requests linked CSS/JS/images
	- JavaScript executes; DOM rendered to screen
- **Static vs Dynamic Pages:**
	- **Type**: Static | **Content**: Fixed HTML files | **Generation**: Pre-built; same for every user
	- **Type**: Dynamic | **Content**: Generated per-request | **Generation**: Server-side script (PHP, Python, Node)
	- **Type**: SPA | **Content**: Single HTML + JS | **Generation**: Client-side rendering via AJAX
- **REST APIs & Data Formats:**
	- REST API: stateless; uses HTTP verbs GET POST PUT DELETE
	- JSON (JavaScript Object Notation): lightweight key-value text; default for modern APIs
	- XML (eXtensible Markup Language): tag-based, verbose; used in legacy/enterprise systems
	- Endpoint: a URL that exposes a resource, e.g. /api/users/42
- **HTTP Status Codes:**
	- **Code**: 200 OK | **Meaning**: Success | **Common trigger**: Normal GET/POST
	- **Code**: 301 Moved | **Meaning**: Permanent redirect | **Common trigger**: URL changed
	- **Code**: 304 Not Modified | **Meaning**: Use cached copy | **Common trigger**: ETag / Last-Modified match
	- **Code**: 404 Not Found | **Meaning**: Resource missing | **Common trigger**: Bad URL
	- **Code**: 429 Too Many | **Meaning**: Rate limited | **Common trigger**: API quota exceeded
	- **Code**: 500 Server Error | **Meaning**: Backend crash | **Common trigger**: Unhandled exception
- *Note*: Client-Server Model Clients initiate requests; servers respond. Social media platforms are servers holding user data; browsers/apps are clients that request and display it. The separation allows independent scaling of each side.

## Search Engines

**Key insight:** ==Search engine pipeline==: Crawl → Index → Rank → Return results

- **Crawling:**
	- Web crawler (spider/bot): follows hyperlinks starting from seed URLs
	- Respects robots.txt — file that tells crawlers which pages to skip
	- Politeness delay: pauses between requests to avoid overloading servers
	- Discovers new pages and re-visits existing ones to detect changes
- **Indexing:**
	- Inverted index: maps each word → list of documents containing it (+ position, frequency)
	- Tokenisation, stemming, stop-word removal applied before storing
	- Enables O(1) look-up of all pages containing a query term
- **PageRank Algorithm:**
- `PR(A) = (1−d) + d × Σ [ PR(T_i) / C(T_i) ] d = damping factor (~0.85) C(T_i) = out-degree of page T_i`
	- Developed by Brin & Page (Google, 1998); models a random surfer clicking links
	- Pages linked to by many high-PR pages receive higher rank
	- Damping factor models probability surfer continues vs. jumps to random page
- **Relevance Ranking & SEO:**
	- TF-IDF: term frequency × inverse document frequency — weights rare but present terms higher
	- SEO (Search Engine Optimisation): keywords in titles/meta tags, backlinks, site speed, mobile-friendliness
- **Search Result Types:**
	- Organic results: ranked by algorithm; cannot be purchased
	- Paid results (ads): auction-based; appear above/beside organic results
	- Featured snippet: direct answer box extracted from top-ranked page
	- Knowledge graph: structured entity data (people, places) shown in sidebar
- *Note*: Modern Search Modern engines add machine-learning ranking (RankBrain, BERT), personalisation by history/location, and featured snippets — far beyond basic PageRank alone.

## Cloud Computing

**Key insight:** ==Cloud = on-demand delivery== of computing resources over the internet, billed on a pay-as-you-go basis

- **Service Models:**
	- **Model**: IaaS | **Provider manages**: Servers, storage, network | **User manages**: OS, runtime, apps | **Example**: AWS EC2, Azure VMs
	- **Model**: PaaS | **Provider manages**: IaaS + OS + runtime | **User manages**: Application code only | **Example**: Heroku, Google App Engine
	- **Model**: SaaS | **Provider manages**: Everything | **User manages**: Only data/config | **Example**: Gmail, Office 365, Salesforce
- **Deployment Models:**
	- Public cloud: resources shared across many tenants; owned by provider (AWS, Azure, GCP)
	- Private cloud: dedicated infrastructure for one organisation; on-premises or hosted
	- Hybrid cloud: combination of public + private; workloads move between them
	- Community cloud: shared by organisations with common concerns (e.g., healthcare, government)
- **Virtualisation:**
	- Virtualisation: hypervisor partitions one physical server into many isolated VMs
	- Type 1 hypervisor (bare-metal): runs directly on hardware — VMware ESXi, Hyper-V
	- Type 2 hypervisor (hosted): runs on top of OS — VirtualBox, VMware Workstation
	- Containers (e.g., Docker): lighter than VMs; share OS kernel; faster start-up
- **Major Cloud Providers:**
	- **Provider**: AWS (Amazon) | **Key services**: EC2, S3, Lambda, RDS | **Market share (~2024)**: ~31%
	- **Provider**: Azure (Microsoft) | **Key services**: VMs, Blob, Functions, SQL | **Market share (~2024)**: ~24%
	- **Provider**: GCP (Google) | **Key services**: Compute Engine, BigQuery, GKE | **Market share (~2024)**: ~11%
- *Note*: Scalability & Elasticity Scalability: ability to handle growing workload. Vertical scaling = bigger machine; Horizontal scaling = more machines. Cloud elasticity allows automatic scale-out/in based on demand.

## Privacy & Data

- *Note*: Core Tension Social media platforms profit from data collection; users gain free services but surrender personal information. Balancing utility vs. privacy is a fundamental challenge.
- **Data Collection Methods:**
	- Cookies: small text files stored by browser; track sessions and user behaviour across sites
	- Third-party cookies: set by advertisers; enable cross-site tracking — increasingly blocked by browsers
	- Fingerprinting: identifies users via browser/device characteristics without cookies
	- Beacons / pixels: 1×1 transparent images that fire HTTP requests to log page views
	- Location data: GPS, IP geolocation, Wi-Fi triangulation
- **Data Mining Basics:**
	- Process of extracting patterns from large datasets using statistics and ML
	- Classification: assign users to categories (e.g., ad targeting segments)
	- Clustering: group similar users without predefined labels
	- Association rules: "users who liked X also liked Y" (collaborative filtering)
	- User profiling: building a persistent model of individual interests, habits, demographics
- **GDPR Overview (EU, 2018):**
	- Lawful basis required for processing personal data (consent, contract, legitimate interest)
	- Right to access, right to erasure ("right to be forgotten"), data portability
	- Data minimisation: collect only what is strictly necessary
	- Breach notification within 72 hours; fines up to €20 M or 4% global revenue
- **Anonymisation vs Pseudonymisation:**
	- **Technique**: Anonymisation | **Re-identification risk**: None (if true) | **GDPR status**: Outside GDPR scope
	- **Technique**: Pseudonymisation | **Re-identification risk**: Possible with key | **GDPR status**: Still personal data; reduced risk
- **Privacy Regulations Comparison:**
	- **Regulation**: GDPR | **Jurisdiction**: European Union | **Key requirement**: Explicit consent; right to erasure; 72h breach notice
	- **Regulation**: CCPA | **Jurisdiction**: California, USA | **Key requirement**: Right to know, opt-out of sale; no sale of minors' data
	- **Regulation**: PIPEDA | **Jurisdiction**: Canada | **Key requirement**: Consent; purpose limitation; safeguards
	- **Regulation**: LGPD | **Jurisdiction**: Brazil | **Key requirement**: Similar to GDPR; National Data Protection Authority

## E-Commerce & Digital Economy

**Key insight:** ==E-commerce = buying and== selling of goods/services over electronic networks (primarily the internet)

- **Business Models:**
	- **Model**: B2B | **Description**: Business-to-Business | **Examples**: Alibaba, AWS marketplace
	- **Model**: B2C | **Description**: Business-to-Consumer | **Examples**: Amazon, Netflix, Spotify
	- **Model**: C2C | **Description**: Consumer-to-Consumer | **Examples**: eBay, Etsy, Craigslist
	- **Model**: C2B | **Description**: Consumer-to-Business | **Examples**: Freelancer, stock photo sites
- **Digital Payments:**
	- Credit/debit cards: most common; PCI-DSS standard governs security
	- Digital wallets: PayPal, Apple Pay, Google Pay — tokenise card details
	- Bank transfers / ACH: direct account-to-account (slower, lower cost)
	- Cryptocurrency: peer-to-peer digital currency; no central authority
- **Blockchain Basics:**
- `Block = { Index | Timestamp | Data | PrevHash | Hash } Hash(n) = SHA256( Index + Timestamp + Data + Hash(n-1) ) Tamper-proof: changing block n invalidates all blocks n+1 … end`
	- Blockchain: append-only distributed ledger; each node holds a full copy
	- Consensus mechanisms: Proof-of-Work (Bitcoin — energy-intensive), Proof-of-Stake (Ethereum 2.0 — energy-efficient)
	- Immutability: altering any past block requires re-mining all subsequent blocks — computationally infeasible
	- Smart contracts: self-executing code stored on blockchain (Ethereum Solidity)
- **Payment Security:**
	- PCI-DSS: Payment Card Industry Data Security Standard — 12 requirements for storing/transmitting card data
	- TLS/HTTPS: all payment pages must use Transport Layer Security (TLS 1.2+)
	- Tokenisation: replace card number with a one-time token; actual PAN never stored by merchant
	- 3D Secure (3DS): additional authentication step (OTP, biometric) for card-not-present transactions
- *Note*: Cryptocurrency Overview Bitcoin (2009, Satoshi Nakamoto) — first decentralised cryptocurrency. Transactions broadcast to P2P network → validated by miners → added to blockchain. Supply capped at 21 million BTC.

## Key Terms & Quick Review


---

# Chapter XX: Social and Ethical Issues

## Intellectual Property

**Key insight:** ==IP = legal rights== protecting creations of the mind; includes copyright, patents, trademarks, trade secrets

- **Four Pillars of IP:**
	- **Type**: Copyright | **Protects**: Original expression (code, docs, art) | **Duration**: Life + 70 yrs
	- **Type**: Patent | **Protects**: Novel inventions & processes | **Duration**: 20 yrs
	- **Type**: Trademark | **Protects**: Brand identity / logos | **Duration**: Renewable ∞
	- **Type**: Trade Secret | **Protects**: Confidential algorithms / formulas | **Duration**: While secret
- **Software Licensing Models:**
	- Proprietary — source closed; users purchase a licence (e.g., Windows, Adobe)
	- Open-Source — source available; governed by licence terms
	- GPL — copyleft; derived works must remain GPL-licensed
	- MIT / BSD — permissive; minimal restrictions on reuse
	- Apache 2.0 — permissive; includes explicit patent grant
	- Freeware / Shareware — gratis but usually closed-source
- **Fair Use Doctrine:**
- *Note*: Four-Factor Test (US) (1) Purpose & character of use (commercial vs. educational) · (2) Nature of the copyrighted work · (3) Amount used relative to the whole · (4) Effect on the market for the original work.
- **Plagiarism:**
- **Software Piracy:**

## Privacy

**Key insight:** ==Privacy = the right== of individuals to control information about themselves and limit others' access to it

- **Threats to Privacy:**
	- Data collection — websites, apps, and sensors harvest personal data continuously
	- Surveillance — CCTV, facial recognition, location tracking
	- Government access — subpoenas, warrants, national-security orders (e.g., FISA, NSLs)
	- Corporate tracking — third-party cookies, device fingerprinting, ad networks
	- Data brokers — aggregate and sell profiles without direct consumer consent
- **Major Privacy Regulations:**
	- **Law**: GDPR | **Jurisdiction**: European Union | **Scope**: Any org processing EU residents' data
	- **Law**: CCPA | **Jurisdiction**: California, USA | **Scope**: For-profit businesses above threshold
	- **Law**: HIPAA | **Jurisdiction**: USA | **Scope**: Health-care providers and insurers
- **Anonymization Techniques:**
- *Note*: De-identification Methods Data masking — replace real values with fictitious ones. k-Anonymity — ensure each record is indistinguishable from ≥ k–1 others. Differential privacy — inject calibrated noise so individual records cannot be inferred from aggregate queries.
- **Principles (GDPR Basis):**
	- Lawfulness, fairness, and transparency
	- Purpose limitation — data used only for stated purpose
	- Data minimisation — collect only what is necessary
	- Storage limitation — retain no longer than needed
	- Right to erasure ("right to be forgotten")
- **Data Lifecycle & Risk Points:**
- `Collection → Storage → Processing → Sharing → Archival → Deletion`

## Computer Crime

**Key insight:** ==Cybercrime = illegal acts== in which a computer is the tool, target, or both

- **Crime Categories:**
	- Hacking — unauthorised access to systems or data
	- Identity theft — stealing credentials to impersonate a victim
	- Phishing — social-engineering attacks via fake messages or sites
	- Online fraud — auction fraud, advance-fee scams, investment schemes
	- Cyberbullying — using digital channels to harass or intimidate
	- Ransomware — encrypts victim data; demands payment for key
	- DDoS — flooding a server to deny legitimate service
- **Computer Forensics:**
- `Evidence = Identification → Preservation → Analysis → Presentation`
	- Chain of custody must be maintained to preserve admissibility
	- Tools: disk imaging, hash verification (SHA-256), log analysis
	- Volatile evidence (RAM, network state) collected before power-off
- **Legal Frameworks:**
- *Note*: CFAA (Computer Fraud and Abuse Act, USA) Primary US federal anti-hacking statute; prohibits unauthorised access to "protected computers." Critics note its broad language can criminalise legitimate security research.
- **Common Attack Vectors:**
	- **Vector**: Email | **Technique**: Spear-phishing, BEC | **Defence**: DMARC/SPF, user training
	- **Vector**: Web | **Technique**: SQL injection, XSS | **Defence**: Input validation, CSP headers
	- **Vector**: Network | **Technique**: MITM, packet sniffing | **Defence**: TLS/HTTPS, VPNs
	- **Vector**: Endpoint | **Technique**: Malware, ransomware | **Defence**: EDR, patching, backups
	- **Vector**: Human | **Technique**: Social engineering | **Defence**: Security awareness training

## Professional Ethics

**Key insight:** ==Professional ethics = obligations== beyond legal compliance; includes honesty, competence, and public safety

- **ACM Code of Ethics (2018):**
	- Contribute to society and human well-being
	- Avoid harm; be honest and trustworthy
	- Be fair and take action not to discriminate
	- Honour confidentiality; respect privacy
	- Access systems only when authorised
	- Design and implement systems that are robustly secure
- **IEEE Code of Ethics (Key Pledge):**
- *Note*: First Commitment "…to hold paramount the safety, health, and welfare of the public…" — safety overrides commercial or organisational pressures.
- **Professional Responsibility Issues:**
	- Whistleblowing — duty vs. loyalty tension; legal protections vary by jurisdiction
	- Conflict of interest — undisclosed personal gain from a professional decision
	- Software liability — who is accountable when software causes harm?
- **Safety-Critical Systems:**
- **Ethical Decision-Making Steps:**
	- Identify the ethical issue and stakeholders affected
	- Gather relevant facts and applicable laws or codes
	- Enumerate possible courses of action
	- Evaluate each option against ethical principles
	- Choose the option that best upholds public safety and professional standards
	- Act and document the reasoning for accountability

## Digital Divide & Accessibility

**Key insight:** ==Digital divide = inequality== in access to, use of, or impact from digital technology across populations

- **Dimensions of the Divide:**
	- Global — developed vs. developing nations; ~2.9 billion offline (ITU 2023)
	- Socioeconomic — income, education, and geography as barriers to access
	- Generational — older adults underserved by rapidly changing interfaces
	- Gender gap — women under-represented in STEM and internet access in many regions
	- Urban–rural — broadband infrastructure concentrated in cities
- **WCAG Accessibility Standards:**
	- **Level**: A | **Meaning**: Minimum | **Example Requirement**: All images have alt text
	- **Level**: AA | **Meaning**: Standard | **Example Requirement**: 4.5:1 colour contrast ratio
	- **Level**: AAA | **Meaning**: Enhanced | **Example Requirement**: Sign-language video for all audio
- **Assistive Technologies:**
	- Screen readers (NVDA, JAWS, VoiceOver)
	- Braille displays and refreshable braille devices
	- Speech recognition (voice-to-text input)
	- Switch access and eye-tracking interfaces
- **Universal Design Principle:**
- *Note*: Design for All Build products usable by the widest range of people without adaptation. Seven UD principles: equitable use, flexibility, simple & intuitive use, perceptible information, tolerance for error, low physical effort, size & space for approach and use.
- **Digital Inclusion Initiatives:**
	- One Laptop per Child (OLPC) — low-cost hardware for developing nations
	- UN Broadband Commission — targets universal affordable connectivity by 2030
	- Net Neutrality — preventing ISPs from tiering internet access by content or ability to pay
	- Community Wi-Fi meshes — municipal broadband as public utility model

## AI Ethics & Future Issues

**Key insight:** ==Algorithmic systems can amplify== societal bias and create harms at scale if designed or deployed without ethical oversight

- **Algorithmic Bias:**
	- Training data bias — historical inequities embedded in datasets
	- Feedback loops — biased outputs influence future training data
	- Proxy discrimination — facially neutral features correlate with protected classes
	- Documented in facial recognition, hiring algorithms, and recidivism tools
- **Emerging Ethical Challenges:**
	- **Issue**: Autonomous weapons | **Core Concern**: Accountability gap; IHL compliance
	- **Issue**: Job displacement | **Core Concern**: Automation of routine cognitive tasks; economic disruption
	- **Issue**: Deepfakes | **Core Concern**: Synthetic media enabling misinformation and fraud
	- **Issue**: Surveillance capitalism | **Core Concern**: Monetising personal data without meaningful consent
- **AI Governance Frameworks:**
	- EU AI Act (2024) — risk-tiered regulation; bans social scoring
	- NIST AI RMF — voluntary risk-management framework (USA)
	- IEEE Ethically Aligned Design — principles for autonomous systems
- **Sustainability:**
- *Note*: Environmental Footprint E-waste: ~62 Mt generated globally in 2022 (UN); toxic heavy metals leach into groundwater. Energy: Training large AI models can emit CO₂ equivalent to dozens of transatlantic flights. Data-centre PUE and renewable sourcing are key metrics.
- **Responsible AI Principles (EU/OECD):**
	- Transparency — decisions explainable to those affected
	- Fairness — equitable treatment across demographic groups
	- Privacy & Security — data protection by design
	- Human oversight — humans remain accountable for AI decisions
	- Robustness — resilient to adversarial inputs and distributional shift

## Key Terms & Quick Review

