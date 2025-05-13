const ctf1 = (
  <>
    <h2>Enumeration</h2>
    <p>Started with a full port scan:</p>
    <pre>nmap -sV -p- 10.10.10.5</pre>

    <h2>Dirbusting</h2>
    <p>Found some juicy endpoints using gobuster:</p>
    <pre>gobuster dir -u http://10.10.10.5 -w /usr/share/wordlists/...</pre>

    <h2>Exploit</h2>
    <p>Used LFI via `page=../../../etc/passwd`</p>

    <img
      src="https://i.pinimg.com/736x/81/08/b6/8108b6c1333151a841f2dd50b66a07e7.jpg"
      alt="screenshot"
    />
    
  </>
);

export default ctf1;
