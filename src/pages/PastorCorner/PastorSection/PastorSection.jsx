export default function PastorCorner() {
  // This content would come from CMS later
  const content = `
    Can someone know anything for sure? Absolutely.....How?
    <br />
    The Word of God states that we can know for sure that we are saved
    and going to heaven when we die.
    <br />
    Consider four things we can know for sure.
    <br />
    We can know for sure about Sin
    <br />
    Romans 3:23
    <br />
    says: "All have sinned and come short of the glory of God" Isaiah
    53:6 says: "All we like sheep have gone astray we have turned
    everyone unto his own way"
    <br />
    We are sinners by birth and by choice.
    <br />
    It is our nature to sin against God. No matter what your
    color, class, or creed is, you have sinned against God.
    <br />
    (Romans 3:10)
    <br />
    We can know for sure about the Sovereign
    <br />
    The Bible teaches there is a sovereign God.
    <br />
    He is forever holy and He cannot look upon sin.
    <br />
    Because He is holy, He must judge sin.
    <br />
    Romans 6:23
    <br />
    says: "For the wages of sin is death" Death means eternal separation
    from the Holy God IN HELL.
    <br />
    We can know for sure about the Savior
    <br />
    God sent His Son, the Lord Jesus, to pay for our sins on the cross.
    <br />
    Jesus was God in Flesh
    <br />
    (I Timothy 3:16).
    <br />
    He lived a perfect life and died in our place.
    <br />
    The Lord Jesus satisfied God's holiness on the cross.
    <br />
    The Lord Jesus rose again from the dead on the third day.
    <br />
    (I Corinthians 15:1-3)
    There is no other way to be saved except
    <br />
    through Jesus Christ our Lord. Acts 4:12 We can know for sure
    about Salvation Salvation is the
    <br />
    FREE GIFT
    <br />
    of God for all who will receive it. Ephesians 2:8-9
    <br />
    says: "For by grace are ye saved through faith; and that not of
    yourselves: it is the gift of God: Not of works, lest any man should
    boast." If you, by faith, will receive the Lord Jesus,
    <br />
    HE WILL FORGIVE YOU
    <br />
    of all your sins and He will
    <br />
    SAVE YOUR SOUL TODAY. Just say this prayer and mean it from your
    heart: Dear Lord Jesus, I know that I am a sinner, I know that I am
    lost, I want to be saved, Come into my heart, Save my soul, Help me to
    live for you, In Jesus name, Amen. On the authority of God, the Word
    of God says He will save you. Romans 10:13 says:
    <br />
    "For whosoever shall call upon the name of the Lord shall be saved"
    Make a change in your life and have eternal life with Christ!
    <br />
    May God Richly Bless You
  `;

  return (
    <section className="my-40">
      <div className="mx-auto max-w-[130rem] px-8">
        <div
          className="mx-auto w-[88.8rem] lg:w-[90%] text-center flex flex-col gap-11
                        xl:w-full
                        md:w-full md:px-8"
        >
          <h2
            className="text-[5.4rem] font-black leading-[110%]
                         lg:text-[3.6rem]"
          >
            Where are you going to spend eternity Heaven or Hell?
          </h2>

          <div
            className="mx-auto w-[64.4rem] lg:w-[90%] leading-[180%] text-[1.8rem]
                          xl:w-full
                          md:w-full md:px-8"
          >
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="space-y-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
