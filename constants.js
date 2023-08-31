const LOGO = String.raw`
_________  __  ______  ___   _  ____  __   ___  ___ 
/ ___/ __ \/  |/  / _ \/ _ | / |/ /\ \/ /  / _ \/ _ )
/ /__/ /_/ / /|_/ / ___/ __ |/    /  \  /  / // / _  |
\___/\____/_/  /_/_/  /_/ |_/_/|_/   /_/__/____/____/ 
                                     /___/           
`

const HELP = String.raw`
- 처음 실행 시 브라우저 설정을 위해 일부 시간이 소요됩니다.

- 로켓펀치에 등록되어있는 회사의 정보를 수집합니다.
  - 종료까지 대략 1~2 시간 정도 소요됩니다.
  - 수집된 정보는 CSV 파일로 저장됩니다.
  
- 주의사항
  - 크롬 브라우저를 이용하기 때문에, 메모리와 CPU 자원을 많이 사용합니다.
  - 컴퓨터가 절전 모드로 전환되면 프로그램이 정상적으로 동작하지 않을 수 있습니다.
`

module.exports = { LOGO, HELP }
