import React from "react";
import { Accordion } from "react-bootstrap";

const QuestionAnswer = () => {
    return (
        <div>
            <div className="container">
                <div className="col-lg-7 mx-auto">
                    <h1 className="display-5 fw-semibold pt-3 text-center">
                        Frequently asked questions
                    </h1>
                    <p className="fs-5 text-center text-muted">
                        Here’s what you need to know about your Rocket license,
                        based on the questions we get asked the most.
                    </p>
                </div>
                <div className="pb-lg-5">
                    <div className="py-5">
                        <Accordion className="rounded-3">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <p className="pt-2">
                                        How will you improve the performance of
                                        a React Application?
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    A React application may be made more
                                    efficient in a variety of ways. As an
                                    example, wherever possible, keep state of
                                    components local. Memorizing React
                                    components to avoid unwanted re-renders is
                                    also a good strategy. In addition, dynamic
                                    imports in React allow for code-splitting
                                    (). React's virtualization of windows or
                                    lists. In React, photos may be loaded in a
                                    'lazy' manner. Making Use of Structural
                                    Consistency. As many chunk files as you'd
                                    want.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <p className="pt-2">
                                        Explain Call by value vs call by
                                        reference
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    We pass the values of variables while
                                    calling a function. On the other hand,
                                    instead of passing values of variables, we
                                    pass addresses of variables. In
                                    call-by-values, we cannot alter the values
                                    of actual variables through function calls.
                                    On the other hand, in the call by reference,
                                    we can alter the values of variables through
                                    function calls.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <p className="pt-2">
                                        What are the different ways to manage a
                                        state in a React application?
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    The four major forms of state you need to
                                    keep track of in your React projects are
                                    Local state, Global state, Server state, and
                                    URL state. A component's local state refers
                                    to the data it keeps. Managing local state
                                    in React is often accomplished via the usage
                                    of the useState hook. Additionally, for both
                                    local and global states, useReducer is an
                                    option that may be implemented in any way.
                                    Under the hood, it is quite similar to
                                    useState, except that it takes a reducer
                                    instead of a starting state. You'd need a
                                    local state for things like showing or
                                    hiding a modal component and keeping track
                                    of input data for forms that have been
                                    disabled. Data that is shared across
                                    different components is referred to as a
                                    global state. When data has to be accessed
                                    and updated across many parts of our
                                    program, we need to use a global state.
                                    Authenticated user state is a frequent
                                    example of a global state. To get or update
                                    data from an external server, you must
                                    handle a variety of states, including
                                    loading and error state.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <p className="pt-2">
                                        What is the scope of JavaScript?
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    The difference between local storage and
                                    session storage is local storage stores data
                                    if you reload the page or relaunch the
                                    browser data will still save but on the
                                    other hand, session storage data is
                                    temporary.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    <p className="pt-2">
                                        Difference between Array vs LinkedList.
                                    </p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    An array is a collection of elements of a
                                    similar data type. On the other hand, Linked
                                    list is an ordered collection of elements of
                                    the same type in which each element is
                                    connected to the next using pointers. Array
                                    elements are not dependent on each other on
                                    the other hand linked list elements are
                                    dependent on each other.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;
