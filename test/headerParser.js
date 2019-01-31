const HeaderParser = artifacts.require("HeaderParser")

contract("HeaderParser", async accounts => {

    it("parse header", async () => {
        // this includes new producers:
        header = "0x24f11547c0684a91facba66ee40000002460d0b0d9a7dbf1a82779c657edc04abcd9b74e03111fd79a3acae3b2160000000000000000000000000000000000000000000000000000000000000000845df9d90c39c48ac3dd78f58c8a0235587435310ad6d29d7981ffcb37e0cdae0100000001020000001500af49aae5e9b2390002e65e41cb9ee12e23af44d32c337788253765eee9cd5c5b39900bf22e6d39dab150956a785eda983b00028d316c09c917eecbd8da03a695029a63dc3a4294c75c254af7d00078709b1107708d3ad7445a993b0002fc35aa95c03e0e75553f2dc670e476e7cbceb0bd9962dd637629e307e6366336e0159c545eb5554400027488fb8ad5080f9ff609501b1b392858061e9cc4d7a7e98f8c1dcfb076c613ab7055c6d2343fa75e00032aeec24bd317fffed0cd787efaf3cd8b7454fcf1dc3be8d4d6b0d6d337282eca7015a7d5c4e82e650003de2988ea5bf8c7d01283f127e9f7a9b3d40fb95a618e78975e210995fcfbff4980b53499565aab6b000383a91696b1538d01f80a7ffabc105aa4eb0a2e69798585c07112e37f2c982e76c0684a91facba66e00030865d02cc3433ac84a94f3834ca39e0cc54446ab3da13e29d3cfc2cc9341c8d58055cc5767055d740002f19818348f231392e0e77ee0d30424f16f213fa44d143efb0944a9e698e6d1c48019bd8b4d57a57e00037fbdb976fea057a5cbb6cb72229f02f36c02635e98ee4ccf555b4c34cc8fbf38a0229bfa4d37a98b000226dfc6402e9ffba01f798814c93ab2aac31e1794409f089525b09deded0eddc390dd39e6aa98b38b00029d65a2751be09a3dcd5df1ed634c13fb11c4a9e31f726a4435d74b9f75c63dd6701573f92ae672a300038b9c2183652437df1294edc1654a7fc3885e9ff849678be67ce79082a566b3647055c694dea4e9ad00027c30a8443026f4c518fb1659aa6e41f15a21b44c075cd98e88e0939ece61d906802f8d144ddab2af0003d09cdc55b989bf3c1b728dc39f049fffe1eb88376b5eeee7ab3ee9fbf382cb26a022338a4d770dc50002f19e790aaf9335cf1ab21a32aa986e4c30ec1360f8e69e2e39ea28af606813df701437935e955cc50002c004a5f66932f3bdc28029071b982c23ab78ed17018bbeec277b9cb8e2d50754a0a09918638c31c60003d322a86189958f2ac52029908b02b8c0ae2262eae21d44b3c1c29ad1e4cb018fa0a2695ce97854cb0002d5d8e44856678a456b05e0359b8925bc4cda9191fd71b95a3550764c51ed3bc81039cd53458755cb00039579e7254e9dc8f4be4e91f4faced3861e2cae56163bee1cdc0ab302ecc7c9daa0f0a5cdb71c8de200026be42a9296f30dd30f72c714591a7ced3b8307ac575f0353848b2643c599906100"

        const headerParser = await HeaderParser.new()
        const result = await headerParser.parseHeader(header);

        /*
        console.log("timestamp: ", result[0]);
        console.log("producer: ", result[1]);
        console.log("confirmed: ", result[2]);
        console.log("previous: ", result[3]);
        console.log("tx_mroot: ", result[4]);
        console.log("schedule: ", result[5]);
        console.log("action_mroot: ", result[6]);
        console.log("version: ", result[7]);
        console.log("amount: ", result[8]);
        console.log("producerNames: \n", result[9]);
        console.log("producerKeysHigh: \n", result[10]);
        */
    });
})