const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    // Ethereun account를 나타내는 객체, 컨트랙트 및 기타 계정으로 거래를 보내는 데 사용되며,
    // 여기서 우리는 연결된 노드의 계정 목록. 여기서는 Hardhat Network가 될 것이고 첫 번째 계정만 유지.

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    // 컨트랙트가 배포되면 컨트랙트의 메서드를 호출 할 수 있습니다. 
    // 여기서 우리는 컨트랙트의 메서드를 호출하여 해당 계정의 잔액을 얻습니다.
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});

// const { expect } = require("chai");

// describe("Token contract", function () {
//   // ...이전 테스트...

//   it("Should transfer tokens between accounts", async function() {
//     const [owner, addr1, addr2] = await ethers.getSigners();

//     const Token = await ethers.getContractFactory("Token");

//     const hardhatToken = await Token.deploy();

//     // 소유자로부터 addr1으로 토큰 50개 전송하기
//     await hardhatToken.transfer(addr1.address, 50);
//     expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

//     // add1에서 add2로 토큰 50개 전송하기
//     await hardhatToken.connect(addr1).transfer(addr2.address, 50);
//     expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
//   });
// });