import React, {Component} from 'react';
import Rx from 'rxjs/Rx';

class ReactiveX extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
    console.log(props);
  }

  componentDidMount = () => {
    // #1
    // var observable = Rx.Observable.create(function(observer) {
    //     try {
    //       observer.next(1);
    //       observer.next(2);
    //       observer.next(3);
    //       setTimeout(() => {
    //         try {//timeout needs a new try catch block
    //             // otherwise the catch block is not registered
    //           observer.next(4);
    //           throw new Error('Exception!!');
    //         } catch (e) {
    //           observer.error(e);
    //           observer.complete();
    //         } finally {
    //           console.log('finally inside');
    //         }
    //       }, 2500);
    //       observer.next(5);
    //     } catch (e) {
    //       observer.error(e);
    //     } finally {
    //       observer.next('Finally Outside!')
    //     }
    // });
    //
    // console.log('just before subscribe');
    // observable.subscribe({
    //     next: result => console.log({msg:'result', result: result}),
    //     error: err => console.error({msg: 'Error', err: err}),
    //     complete: () => console.info({msg: 'Complete!'})
    // });
    // console.log('just after subscribe');
    // #1
    // #2 : Observables are like functions with zero arguments, but generalize those to allow multiple values.
    // var foo = Observable.create(function(observer) {
    //     console.log(observer);
    //     observer.next(42);
    // });
    //
    // foo.subscribe(function(x) {
    //     console.log(x);
    // });
    // foo.subscribe(function(y) {
    //     console.log(y);
    // });
    // #2
    // #3 : Observables are able to deliver values either synchronously or asynchronously.
    // var foo = Observable.create(function(observer) {
    //     console.log('Hello');
    //     observer.next(42);
    //     observer.next(100);
    //     observer.next(200);
    //     setTimeout(() => {
    //         observer.next(300); // happens asynchronously
    //         observer.complete();
    //     }, 1000);
    // });
    //
    // console.log('before');
    // foo.subscribe({
    //     next: x => console.log(x),
    //     complete: () => console.log('mama')
    // });
    // console.log('after');
    // #3
    // #4
    // var observable = Rx.Observable.create(function subscribe(observer) {
    //     // Keep track of the interval resource
    //     var intervalID = setInterval(() => {
    //         observer.next('hi');
    //     }, 1000);
    //
    //     // Provide a way of canceling and disposing the interval resource
    //     return function unsubscribe() {
    //         console.log('Clearing intervalID : ' + intervalID);
    //         clearInterval(intervalID);
    //         console.log('After clearing interval'); // <- this was CALLED
    //         observer.complete(); // <- this was HAD NO EFFECT
    //     };
    // });
    // var observer = { //Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.
    //     next: x => console.log('Observer got a next value: ' + x),
    //     error: err => console.error('Observer got an error: ' + err),
    //     complete: () => console.log('Observer got a complete notification')
    // };
    // var subscription = observable.subscribe(observer);
    // setTimeout(function() {
    //     subscription.unsubscribe();
    // }, 1500);
    // #4
    // #5 : Observable Interval
    // var observable = Rx.Observable.interval(1000);
    // var subscription = observable.subscribe(x => {
    //   console.log(x);
    // });
    // // Later:
    // // This cancels the ongoing Observable execution which
    // // was started by calling subscribe with an Observer.
    // setTimeout(function() {
    //   subscription.unsubscribe();
    // }, 4500);//PRINTS : 0 1 2 3
    // #5
    // #6
    // var observable1 = Rx.Observable.create(function(observer) {
    //
    //     var intervalID = setInterval(() => {
    //         observer.next('400');
    //     }, 400);
    //
    //     return function unsubscribe() {
    //         clearInterval(intervalID);
    //     };
    // });
    // var observable2 = Rx.Observable.interval(300);
    //
    // var subscription = observable1.subscribe(x => console.log('subscription: ' + x));
    // var childSubscription = observable2.subscribe(x => console.log('childSubscription: ' + x));
    // subscription.add(childSubscription);
    // // subscription.remove(childSubscription);//Removes
    //
    // setTimeout(() => {
    //     // Unsubscribes BOTH subscription and childSubscription
    //     subscription.unsubscribe();
    // }, 1000);
    // #6
    // #7 : A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
    // var subject = new Rx.Subject();
    //
    // subject.subscribe({
    //   next: (v) => console.log(v)
    // });
    //
    // subject.subscribe({
    //   next: (v) => console.log(v)
    // });
    //
    // subject.next(1);
    // subject.next(2);
    // #7
    // #8 : Observable + Subject
    // var subject = new Rx.Subject();
    //
    // subject.subscribe({
    //   next: s => console.log(s)
    // });
    //
    // subject.subscribe({
    //   next: s => console.log(s)
    // });
    //
    // // var observable = Rx.Observable.create(function(observer) {
    // //   observer.next(1);
    // //   observer.next(2);
    // //   observer.next(3);
    // // });
    // // ABOVE CAN BE REPLACED WITH THIS BELOW
    // var observable = Rx.Observable.from([1, 2, 3]);
    //
    // observable.subscribe({
    //   next: y => subject.next(y)
    // });
    // #8
    // #9 : MULTI-CAST
    // var observable = Rx.Observable.from([1, 2, 3]);
    // var subject = new Rx.Subject();
    // var multicast = observable.multicast(subject);
    //
    // multicast.subscribe({
    //   next: v => console.log('v1 : ' + v)
    // });
    //
    // multicast.subscribe({
    //   next: v => console.log('v2 : ' + v)
    // });
    //
    // // This is, under the hood, `source.subscribe(subject)`:
    // multicast.connect();
    // #9
    // #9 : MULTI-CAST with REFCOUNT
    // var observable = Rx.Observable.from([1, 2, 3]);
    // var subject = new Rx.Subject();
    // var refCount = observable.multicast(subject).refCount();
    //
    // var subscription1 = refCount.subscribe({
    //   next: v => console.log('s1 : ' + v)
    // });
    //
    // var subscription2 = refCount.subscribe({
    //   next: v => console.log('s2 : ' + v)
    // });

    // var source = Rx.Observable.create(function(observer) {
    //   setTimeout(function() {
    //     observer.next('1');
    //     observer.next('2');
    //     observer.next('3');
    //   }, 0);// Give time for both observers to get subscriptions
    // });
    // var subject = new Rx.Subject();
    // var refCounted = source.multicast(subject).refCount();
    // var subscription1, subscription2;
    //
    // // This calls `connect()`, because
    // // it is the first subscriber to `refCounted`
    // console.log('observerA subscribed');
    // subscription1 = refCounted.subscribe({
    //     next: (v) => console.log('observerA: ' + v)
    // });
    //
    // console.log('observerB subscribed');
    // subscription2 = refCounted.subscribe({
    //     next: (v) => console.log('observerB: ' + v)
    // });
    //
    // setTimeout(() => {
    //     console.log('observerA unsubscribed');
    //     subscription1.unsubscribe();
    // }, 1000);
    //
    // // This is when the shared Observable execution will stop, because
    // // `refCounted` would have no more subscribers after this
    // setTimeout(() => {
    //     console.log('observerB unsubscribed');
    //     subscription2.unsubscribe();
    // }, 1000);

    // This, is NOT NEEDED
    // multicast.connect();
    // #9

    // #10 : BehaviorSubjects are useful for representing "values over time".
    // For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.
    // var subject = new Rx.BehaviorSubject(0); // This calls next with init value 0 on subscribe too
    // // var subject = new Rx.Subject();// This does not call next on subscribe
    // subject.subscribe({
    //     next: (v) => console.log('observerA: ' + v)
    // });//Prints A:0
    //
    // subject.next(1);//Prints A:1
    // subject.next(2);//Prints A:2
    //
    // subject.subscribe({
    //     next: (v) => console.log('observerB: ' + v)
    // });//Prints B:2
    // subject.next(3);//Prints A:3, B:3
    // #10

    // #11 : A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.
    // var subject = new Rx.ReplaySubject(2); // buffer 2 values for new subscribers
    //
    // subject.subscribe({
    //     next: (v) => console.log('observerA: ' + v)
    // });
    //
    // subject.next(1);//A:1
    // subject.next(2);//A:2
    // subject.next(3);//A:3, Will be replayed if new subscriber attaches just after nexts
    // subject.next(4);//A:4, Will be replayed if new subscriber attaches just after nexts
    //
    // subject.subscribe({
    //     next: (v) => console.log('observerB: ' + v)
    // });//B:3, B:4, For this, last 2 nexts are replayed
    //
    // subject.next(5);//A:5, B:5
    // #11
    // #12 : Time based replay of observable executions
    // var subject = new Rx.ReplaySubject(5, 100/* windowTime */);
    //
    // subject.subscribe({
    //     next: (v) => console.log('observerA: ' + v)
    // });
    //
    // var i = 1;
    // var intervalID = setInterval(() => subject.next(i++), 200);
    //
    // setTimeout(() => {
    //     subject.subscribe({
    //         next: (v) => console.log('observerB: ' + v)
    //     });
    // }, 1000);
    //
    // setTimeout(() => {
    //     clearInterval(intervalID);
    // }, 2000);
    // #12
    // #13 : AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers,
    //       and ONLY when the execution completes.
    // var subject = new Rx.AsyncSubject();
    //
    // subject.subscribe({
    //     next: (v) => console.log({msg:'A', v:v.id})
    // });
    //
    // var fn = function (data) {
    //   console.log({msg:'data', data:data});
    //   return data;
    // }
    //
    // subject.next({
    //   id: fn(1)
    // });
    // subject.next({
    //   id: () => {
    //     var data = 1;
    //     console.log({msg:'data', data:data});
    //     return data;
    //   }
    // });
    // subject.next({
    //   id: fn(3)
    // });
    // subject.next({
    //   id: fn(4)
    // });
    //
    // subject.subscribe({
    //     next: (v) => console.log({msg:'B', v:v.id})
    // });
    //
    // subject.next({
    //   id: fn(5)
    // });
    // subject.complete();
    // #13
    // #14 : An Operator is a function which creates a new Observable based on the current Observable.
    //       This is a pure operation: the previous Observable stays unmodified.
    // This below is a static operator
    // function multiplyByTen(input) {
    //     var output = Rx.Observable.create(function subscribe(observer) {
    //         input.subscribe({
    //             next: (v) => {
    //                 console.log('A:' + v);
    //                 observer.next(v * v * v);
    //             },
    //             error: (err) => observer.error(err),
    //             complete: () => observer.complete()
    //         });
    //     });
    //     return output;
    // }
    //
    // var input = Rx.Observable.from([1, 2, 3]);
    // var output = multiplyByTen(input);
    // output.subscribe({
    //     next: (v) => console.log('B:' + v)
    // });
    // #14
    // #15 : Instance Operator
    // var arr = [0, 1, 2];
    // Rx.Observable.prototype.power = function (pow) {// Arrow fn does not carry this, so regular fn
    //     var input = this;
    //     return Rx.Observable.create(function subscribe(observer) {
    //         input.subscribe({
    //             next: (v) => observer.next(Math.pow(v, pow)),
    //             error: (err) => observer.error(err),
    //             complete: () => observer.complete()
    //         });
    //     });
    // }
    // var observable = Rx.Observable.from(arr).power(2);
    // observable.subscribe({
    //   next: (v) => console.log('Square : ' + v)
    // });
    // var observable2 = Rx.Observable.from(arr).power(3);
    // observable2.subscribe({
    //   next: (v) => console.log('Cube : ' + v)
    // });
    // #15
    // #16
    // var observable = Rx.Observable.create(function(proxyObserver) {
    //     proxyObserver.next(1);
    //     proxyObserver.next(2);
    //     proxyObserver.next(3);
    //     proxyObserver.complete();
    // }).observeOn(Rx.Scheduler.queue);
    //null : notifications are delivered synchronously and recursively
    //.observeOn(Rx.Scheduler.queue) : Schedules on a queue in the current event frame (trampoline scheduler). Use this for iteration operations.
    //.observeOn(Rx.Scheduler.asap) : Schedules on the micro task queue, which uses the fastest transport mechanism available
    //.observeOn(Rx.Scheduler.async) : Schedules work with setInterval. Use this for time-based operations.

    // var finalObserver = {
    //     next: x => console.log('got value ' + x),
    //     error: err => console.error('something wrong occurred: ' + err),
    //     complete: () => console.log('done')
    // };
    //
    // console.log('just before subscribe');
    // observable.subscribe(finalObserver);
    // console.log('just after subscribe');
    // #16
    // #17 : Operators : Of
    // var numbers = Rx.Observable.of(10, 20, 30);
    // var letters = Rx.Observable.of('a', 'b', 'c');
    // // var interval = Rx.Observable.interval(500);
    // var result = numbers.concat(letters);
    // result.subscribe(x => console.log(x));
    // #17
  }

  render() {
    return (
      <div>
        ReactiveX
      </div>
    );
  }

}

export default ReactiveX;
